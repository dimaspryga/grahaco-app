"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Phone, Mail, Clock, Shield, CheckCircle, Star, ArrowLeft, Calendar, Award } from "lucide-react"
import type { ServiceDetail } from "@/lib/services-data"

interface ServiceDetailLayoutProps {
  service: ServiceDetail
  serviceType: string
}

export function ServiceDetailLayout({ service, serviceType }: ServiceDetailLayoutProps) {
  const handleWhatsAppContact = () => {
    window.open(
      `https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20dengan%20layanan%20${service.title}`,
      "_blank",
    )
  }

  const handleEmailContact = () => {
    window.open(`mailto:info@grahaco.com?subject=Inquiry%20about%20${service.title}`, "_blank")
  }

  const handlePhoneContact = () => {
    window.open("tel:+6281234567890", "_blank")
  }

  const getServiceTypeTitle = (type: string) => {
    switch (type) {
      case "kontraktor":
        return "Kontraktor"
      case "desain":
        return "Desain"
      case "kelola-properti":
        return "Kelola Properti"
      default:
        return "Services"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/services/${serviceType}`}>{getServiceTypeTitle(serviceType)}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{service.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button variant="outline" size="sm" asChild>
              <a href={`/services/${serviceType}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge variant="secondary">{service.category}</Badge>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{service.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="process">Proses</TabsTrigger>
                <TabsTrigger value="gallery">Galeri</TabsTrigger>
                <TabsTrigger value="testimonials">Testimoni</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Deskripsi Layanan</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.detailedDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-0 bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Keunggulan
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Fitur Utama
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Durasi Pengerjaan</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Garansi</div>
                      <div className="text-sm text-muted-foreground">{service.warranty}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="process" className="space-y-6 mt-6">
                <h3 className="text-xl font-semibold">Tahapan Pengerjaan</h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{step}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-6 mt-6">
                <h3 className="text-xl font-semibold">Galeri Proyek</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.gallery.map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="testimonials" className="space-y-6 mt-6">
                <h3 className="text-xl font-semibold">Testimoni Klien</h3>
                <div className="space-y-4">
                  {service.testimonials.map((testimonial, index) => (
                    <Card key={index} className="border-0 bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-2">"{testimonial.content}"</p>
                            <div>
                              <div className="font-semibold text-sm">{testimonial.name}</div>
                              <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar - Floating Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="border-0 bg-card shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center">Tertarik dengan layanan ini?</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">
                    Konsultasikan kebutuhan Anda dengan tim ahli kami
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleWhatsAppContact} className="w-full bg-accent hover:bg-accent/90" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Sekarang
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button onClick={handlePhoneContact} variant="outline" size="sm" className="bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      Telepon
                    </Button>
                    <Button onClick={handleEmailContact} variant="outline" size="sm" className="bg-transparent">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </div>
                  <div className="text-center pt-4 border-t">
                    <div className="text-sm text-muted-foreground mb-2">Konsultasi Gratis</div>
                    <div className="text-xs text-muted-foreground">
                      Respons dalam 24 jam
                      <br />
                      Senin - Sabtu, 08:00 - 17:00
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Jadwalkan Konsultasi</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Dapatkan estimasi biaya dan timeline yang akurat
                  </p>
                  <Button
                    onClick={handleWhatsAppContact}
                    variant="secondary"
                    size="sm"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Jadwalkan Sekarang
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
