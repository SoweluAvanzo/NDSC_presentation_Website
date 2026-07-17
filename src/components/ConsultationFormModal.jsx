import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { api } from '@/api/client';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ConsultationFormModal({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service_interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await api.sendConsultation({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service_interest: formData.service_interest,
        message: formData.message,
      });

      setIsSuccess(true);
      setTimeout(() => {
        onOpenChange(false);
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          service_interest: '',
          message: ''
        });
      }, 2000);
    } catch (err) {
      console.error('Error sending consultation request:', err);
      setError(
        err?.status === 429
          ? 'Too many requests. Please wait a few minutes and try again.'
          : 'Failed to send your request. Please try again, or contact us directly.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] border-[#18C5FF]/20 text-[#F5F7FF]">
        {isSuccess ? (
          <div className="py-12 text-center">
            <CheckCircle className="w-16 h-16 text-[#18C5FF] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#F5F7FF] mb-2">Request Sent Successfully!</h3>
            <p className="text-[#C3C8E5]">We'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#F5F7FF]">Request a Consultation</DialogTitle>
              <DialogDescription className="text-[#C3C8E5]">
                Tell us about your project and we'll reach out to discuss how we can help.
              </DialogDescription>
            </DialogHeader>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 text-sm">{error}</p>
                  <p className="text-[#C3C8E5] text-xs mt-1">
                    You can also email us directly at alex.norta@nortadesyco.xyz
                  </p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#F5F7FF]">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0a0f1e] border-[#18C5FF]/30 text-[#F5F7FF]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#F5F7FF]">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#0a0f1e] border-[#18C5FF]/30 text-[#F5F7FF]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-[#F5F7FF]">Company / Organization</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-[#0a0f1e] border-[#18C5FF]/30 text-[#F5F7FF]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-[#F5F7FF]">Service Interest *</Label>
                <Select
                  required
                  value={formData.service_interest}
                  onValueChange={(value) => setFormData({ ...formData, service_interest: value })}
                >
                  <SelectTrigger className="bg-[#0a0f1e] border-[#18C5FF]/30 text-white">
                    <SelectValue placeholder="Select a service" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1628] border-[#18C5FF]/30">
                    <SelectItem value="blockchain_dao" className="text-white focus:bg-[#18C5FF] focus:text-black">Blockchain, DAO &amp; Digital Trust</SelectItem>
                    <SelectItem value="ai_ml" className="text-white focus:bg-[#18C5FF] focus:text-black">AI &amp; Machine Learning</SelectItem>
                    <SelectItem value="cybersecurity" className="text-white focus:bg-[#18C5FF] focus:text-black">Cybersecurity &amp; Verification</SelectItem>
                    <SelectItem value="software_cloud" className="text-white focus:bg-[#18C5FF] focus:text-black">Software, Cloud &amp; Distributed Systems</SelectItem>
                    <SelectItem value="research_innovation" className="text-white focus:bg-[#18C5FF] focus:text-black">Research, Innovation &amp; Due Diligence</SelectItem>
                    <SelectItem value="other" className="text-white focus:bg-[#18C5FF] focus:text-black">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#F5F7FF]">Message *</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project and what you're looking to achieve..."
                  className="bg-[#0a0f1e] border-[#18C5FF]/30 text-[#F5F7FF]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="bg-transparent border-[#555B7C] text-white hover:bg-[#555B7C]/20"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2563FF] hover:bg-[#1d4ed8] text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}