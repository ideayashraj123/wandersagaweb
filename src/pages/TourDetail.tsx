import { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { getTourBySlug, tours, Tour } from "@/data/tours";
import { sendBookingEmail, sendEmailFallback, BookingFormData } from "@/lib/emailService";
import {
  MapPin,
  Calendar,
  Clock3,
  Star,
  Check,
  X as CloseIcon,
  IndianRupee,
  Phone,
  Users,
  ChevronRight,
  Loader2,
} from "lucide-react";

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

const InfoPill = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-white/40 shadow-sm text-sm">
    <Icon className="h-4 w-4 text-primary" />
    <span className="text-foreground/90">{text}</span>
  </div>
);

const TourDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const tour: Tour | undefined = useMemo(() => (slug ? getTourBySlug(slug) : undefined), [slug]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const bookingData: BookingFormData = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      travelers: parseInt(formData.get('travelers') as string),
      tentativeDates: formData.get('dates') as string,
      tourName: tour?.name,
      tourPrice: tour ? formatCurrency(tour.price) : undefined,
    };

    try {
      // Try to send email using EmailJS
      const emailSent = await sendBookingEmail(bookingData);
      
      if (emailSent) {
        toast({ 
          title: "Enquiry sent successfully!", 
          description: "Our travel expert will contact you shortly via email and phone." 
        });
      } else {
        // Fallback to mailto if EmailJS fails
        sendEmailFallback(bookingData);
        toast({ 
          title: "Enquiry initiated", 
          description: "Your email client has been opened. Please send the email to complete your enquiry." 
        });
      }
      
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error sending enquiry:', error);
      // Use fallback method
      sendEmailFallback(bookingData);
      toast({ 
        title: "Enquiry initiated", 
        description: "Your email client has been opened. Please send the email to complete your enquiry." 
      });
      setIsDialogOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-3xl font-semibold mb-2">Tour not found</h1>
          <p className="text-muted-foreground mb-6">The tour you are looking for does not exist or has been moved.</p>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={tour.heroImage}
            alt={tour.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[52vh] flex items-end relative z-10">
            <div className="text-white pb-8 animate-in fade-in-50">
              <div className="mb-3 inline-flex items-center gap-2">
                <Badge className="bg-white/15 backdrop-blur border-white/30">Curated Tour</Badge>
                <div className="inline-flex items-center gap-1 text-yellow-300/90">
                  <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  <span className="font-semibold">{tour.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-lg">{tour.name}</h1>
              <p className="text-white/90 text-lg max-w-3xl drop-shadow">{tour.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <InfoPill icon={Clock3} text={`${tour.durationNights} Nights / ${tour.durationDays} Days`} />
                <InfoPill icon={MapPin} text={`Start: ${tour.startingPoint}`} />
                <InfoPill icon={Calendar} text={`Best time: ${tour.bestTime}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        {/* Persistent Section Nav */}
        <SectionNav />
        <div className="h-14 md:h-16" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card id="overview" className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{tour.description}</p>

              {/* Highlights */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h, idx) => (
                    <div key={idx} className="inline-flex items-center gap-2 text-foreground/90">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Inclusions Exclusions */}
            <div id="inclusions" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">Inclusions</h3>
                <ul className="space-y-2">
                  {tour.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-green-600" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">Exclusions</h3>
                <ul className="space-y-2">
                  {tour.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CloseIcon className="h-4 w-4 mt-0.5 text-rose-600" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Itinerary */}
            <Card id="itinerary" className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Itinerary</h3>
                <span className="text-sm text-muted-foreground">{tour.durationDays} Days plan</span>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {tour.itinerary.map((item) => (
                  <AccordionItem key={item.day} value={`day-${item.day}`}>
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="rounded-full">Day {item.day}</Badge>
                        <span className="font-medium text-left">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      {item.activities && item.activities.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.activities.map((act, idx) => (
                            <Badge key={idx} variant="outline">{act}</Badge>
                          ))}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            {/* Gallery */}
            <Card id="gallery" className="p-6">
              <h3 className="text-lg font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tour.galleryImages.map((img, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-xl group">
                    <img src={img} alt={`${tour.name} ${idx + 1}`} className="h-36 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                ))}
              </div>
            </Card>

            {/* FAQs */}
            {tour.faqs && tour.faqs.length > 0 && (
              <Card id="faqs" className="p-6">
                <h3 className="text-lg font-semibold mb-4">FAQs</h3>
                <Accordion type="single" collapsible>
                  {tour.faqs.map((f, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger>{f.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">{formatCurrency(tour.price)}</div>
                    {tour.oldPrice && (
                      <div className="text-muted-foreground line-through mb-1">{formatCurrency(tour.oldPrice)}</div>
                    )}
                  </div>
                </div>
                <Badge variant="secondary" className="rounded-full">
                  <IndianRupee className="h-4 w-4 mr-1" /> All inclusive
                </Badge>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-foreground/90">
                  <Clock3 className="h-4 w-4 text-primary" />
                  {tour.durationNights} Nights / {tour.durationDays} Days
                </div>
                <div className="flex items-center gap-2 text-foreground/90">
                  <Users className="h-4 w-4 text-primary" />
                  Ideal for 2–10 travelers
                </div>
                <div className="flex items-center gap-2 text-foreground/90">
                  <MapPin className="h-4 w-4 text-primary" />
                  Start at {tour.startingPoint}
                </div>
              </div>

              <div className="mt-5">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full btn-hero">Book / Enquire</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Send an enquiry</DialogTitle>
                      <DialogDescription>
                        Share your details and we will reach out with the best quote and availability.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      className="space-y-4"
                      onSubmit={handleFormSubmit}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" name="name" placeholder="John Doe" className="h-11 md:h-10" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="98765 43210" className="h-11 md:h-10" required />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" className="h-11 md:h-10" required />
                        </div>
                        <div>
                          <Label htmlFor="travelers">Travelers</Label>
                          <Input id="travelers" name="travelers" type="number" min={1} defaultValue={2} className="h-11 md:h-10" required />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="dates">Tentative Dates</Label>
                          <Input id="dates" name="dates" placeholder="20 Oct - 26 Oct" className="h-11 md:h-10" />
                        </div>
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Submit'
                        )}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full mt-2" onClick={() => window.open("tel:+919286483766")}> 
                  <Phone className="h-4 w-4 mr-2" /> Call Travel Expert
                </Button>
              </div>

              <div className="mt-6 text-xs text-muted-foreground">
                100% Secure • Instant Confirmation • Easy Rescheduling
              </div>
            </Card>
          </div>
        </div>

        {/* Related tours */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <h3 className="text-xl font-semibold mb-4">You may also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tours
              .filter((t) => t.slug !== tour.slug)
              .slice(0, 3)
              .map((t) => (
                <Card key={t.slug} className="overflow-hidden group cursor-pointer" onClick={() => navigate(`/tour/${t.slug}`)}>
                  <div className="relative h-40 overflow-hidden">
                    <img src={t.heroImage} alt={t.name} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold drop-shadow">{t.name}</div>
                        <div className="text-sm text-white/90 drop-shadow">{formatCurrency(t.price)}</div>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-300/90">
                        <Star className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300" />
                        <span className="text-xs">{t.rating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-border/40 p-3 flex items-center justify-between lg:hidden">
        <div>
          <div className="text-xs text-muted-foreground">Starting from</div>
          <div className="text-lg font-semibold">{formatCurrency(tour.price)}</div>
        </div>
        <Button className="btn-hero" onClick={() => setIsDialogOpen(true)}>
          Book Now <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default TourDetail;

// Sticky section nav component
const tabs = [
  { id: "overview", label: "Overview" },
  { id: "inclusions", label: "Inclusions & Exclusions" },
  { id: "itinerary", label: "Itinerary" },
  { id: "gallery", label: "Gallery" },
  { id: "faqs", label: "FAQs" },
];

const SectionNav = () => {
  const [active, setActive] = useState<string>(tabs[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -120; // account for navbar + nav height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-20 z-50 w-full bg-transparent">
      <div className="rounded-2xl border border-white/30 bg-white/50 backdrop-blur-xl shadow-xl">
        <div className="flex flex-wrap gap-2 p-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => handleClick(t.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                active === t.id
                  ? "bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow"
                  : "bg-white/60 text-foreground hover:bg-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


