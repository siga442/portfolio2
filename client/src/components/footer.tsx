import { Mail, Phone, Linkedin } from "lucide-react";
import { cvData } from "@/data/cv-data";

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{cvData.personal.name}</h3>
          <p className="text-slate-300 mb-6">{cvData.personal.title}</p>
          <div className="flex justify-center space-x-6">
            <a 
              href={`mailto:${cvData.personal.email}`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href={`tel:${cvData.personal.phone}`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a 
              href={`https://${cvData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-600 text-slate-400">
            <p>&copy; 2024 {cvData.personal.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
