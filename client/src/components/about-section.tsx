import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { cvData } from "@/data/cv-data";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Proven track record of successfully delivering complex projects within enterprise environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">Professional Background</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {cvData.about}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-secondary">University of Buda</div>
                  <div className="text-sm text-slate-500">Electrical Engineering</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-secondary">University of Dunaújváros</div>
                  <div className="text-sm text-slate-500">IT Engineering</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-secondary">Email</div>
                  <div className="text-sm text-slate-500">{cvData.personal.email}</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-secondary">Phone</div>
                  <div className="text-sm text-slate-500">{cvData.personal.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-primary transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-secondary">Location</div>
                  <div className="text-sm text-slate-500">{cvData.personal.nationality}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary mb-6">Skills & Expertise</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-secondary mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Leadership Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skillHighlights.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/20 text-primary border-primary/30 hover:bg-primary hover:text-white transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-secondary mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    Business Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cvData.businessHighlights.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent/20 text-accent border-accent/30 hover:bg-accent hover:text-white transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-secondary mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cvData.technicalSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-200 text-green-700 border-green-300 hover:bg-green-600 hover:text-white transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Career Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              <div className="space-y-8">
                {cvData.experience.slice(0, 4).map((exp, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold text-secondary">{exp.position}</h4>
                      <p className="text-sm text-slate-500">{exp.company} | {exp.period}</p>
                      <p className="text-slate-600 mt-2">{exp.responsibilities[0]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
