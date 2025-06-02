import { MapPin } from "lucide-react"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"



export const ContactSection = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <div className="flex justify-center">
                <div className="space-y-8 text-center">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>
                    <div className="apce-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:sheehansuneel5@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"> sheehansuneel5@gmail.com </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:+351920396916" className="text-muted-foreground hover:text-primary transition-colors"> +351 920396916 </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location </h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors"> Lisbon, Portugal </a>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
        
    </section>
}