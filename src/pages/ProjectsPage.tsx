
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import ProgressBar from '@/components/ProgressBar';

// Mock project data - in a real app this would come from an API
const projectsData = [
  {
    id: "GP001",
    clientName: "Sharma Sweets",
    projectType: "Website Development",
    startDate: "2023-11-15",
    dueDate: "2023-12-20",
    progress: 85,
    tasks: [
      { name: "Design Approval", progress: 100 },
      { name: "Content Creation", progress: 90 },
      { name: "Development", progress: 80 },
      { name: "Testing", progress: 70 },
      { name: "Deployment", progress: 0 }
    ],
    updates: [
      { date: "2023-12-01", message: "Homepage and product pages completed." },
      { date: "2023-12-05", message: "Product gallery integration finished." },
      { date: "2023-12-10", message: "Contact form and Google Maps added." }
    ]
  },
  {
    id: "GP002",
    clientName: "Kumar Electronics",
    projectType: "E-Commerce Website",
    startDate: "2023-10-20",
    dueDate: "2024-01-10",
    progress: 60,
    tasks: [
      { name: "Design Approval", progress: 100 },
      { name: "Content Creation", progress: 90 },
      { name: "Development", progress: 70 },
      { name: "E-Commerce Integration", progress: 50 },
      { name: "Payment Gateway", progress: 40 },
      { name: "Testing", progress: 20 },
      { name: "Deployment", progress: 0 }
    ],
    updates: [
      { date: "2023-11-01", message: "Website design approved." },
      { date: "2023-11-15", message: "Product catalog structure completed." },
      { date: "2023-12-05", message: "Shopping cart functionality implemented." }
    ]
  },
  {
    id: "GP003",
    clientName: "Green Valley Restaurant",
    projectType: "Social Media Management",
    startDate: "2023-11-01",
    dueDate: "Ongoing",
    progress: 75,
    tasks: [
      { name: "Strategy Development", progress: 100 },
      { name: "Content Calendar", progress: 100 },
      { name: "November Content", progress: 100 },
      { name: "December Content", progress: 80 },
      { name: "January Planning", progress: 30 }
    ],
    updates: [
      { date: "2023-11-10", message: "November content calendar approved." },
      { date: "2023-11-25", message: "Instagram engagement increased by 15%." },
      { date: "2023-12-08", message: "December holiday campaign launched." }
    ]
  },
  {
    id: "GP004",
    clientName: "Singh Enterprises",
    projectType: "TallyPrime Accounting",
    startDate: "2023-10-01",
    dueDate: "Ongoing",
    progress: 90,
    tasks: [
      { name: "Software Setup", progress: 100 },
      { name: "Data Migration", progress: 100 },
      { name: "October Bookkeeping", progress: 100 },
      { name: "November Bookkeeping", progress: 100 },
      { name: "December Bookkeeping", progress: 60 }
    ],
    updates: [
      { date: "2023-10-15", message: "TallyPrime setup completed." },
      { date: "2023-11-05", message: "October financial reports delivered." },
      { date: "2023-12-07", message: "November financial reports delivered." }
    ]
  }
];

const ProjectsPage = () => {
  const [clientId, setClientId] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectData, setProjectData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { toast } = useToast();
  
  const handleSearch = () => {
    setIsLoading(true);
    setError("");
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const projectById = projectsData.find(project => project.id.toLowerCase() === clientId.toLowerCase());
      const projectByName = projectsData.find(project => 
        project.clientName.toLowerCase().includes(clientName.toLowerCase()) && clientName.length > 2
      );
      
      const foundProject = projectById || projectByName;
      
      if (foundProject) {
        setProjectData(foundProject);
        toast({
          title: "Project Found",
          description: `Displaying project information for ${foundProject.clientName}`,
        });
      } else {
        setProjectData(null);
        setError("No project found with the provided information. Please check your Project ID or Client Name and try again.");
        toast({
          title: "Project Not Found",
          description: "No matching project found with the provided details.",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading 
              title="My Projects" 
              subtitle="Track the progress of your ongoing projects with Growliora"
            />
          </AnimatedSection>
        </div>
      </section>
      
      {/* Project Search */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto bg-zinc-900/50 border border-growliora-gray/20 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Find Your Project</h3>
              <p className="text-growliora-gray mb-6">
                Enter your Project ID or Client Name to view your project status and updates
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="projectId" className="block text-sm font-medium mb-2">
                    Project ID
                  </label>
                  <Input
                    id="projectId"
                    placeholder="e.g., GP001"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    className="bg-black border-growliora-gray/30 focus:border-growliora-coral"
                  />
                </div>
                <div>
                  <label htmlFor="clientName" className="block text-sm font-medium mb-2">
                    Client Name
                  </label>
                  <Input
                    id="clientName"
                    placeholder="e.g., Sharma Sweets"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="bg-black border-growliora-gray/30 focus:border-growliora-coral"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleSearch} 
                disabled={isLoading || (clientId === "" && clientName === "")}
                className="w-full bg-orange-gradient hover:opacity-90 text-white"
              >
                {isLoading ? "Searching..." : "View Project Status"}
              </Button>
              
              {/* Sample Project IDs for demo */}
              <div className="mt-4 text-sm text-growliora-gray">
                <p>Sample Project IDs for demo: GP001, GP002, GP003, GP004</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Project Details */}
      {error && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto bg-red-950/20 border border-red-500/30 rounded-xl p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-500 mx-auto mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Project Not Found</h3>
                <p>{error}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
      
      {projectData && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                {/* Project Header */}
                <div className="bg-zinc-900/50 border border-growliora-gray/20 rounded-xl p-6 md:p-8 mb-8">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{projectData.clientName}</h2>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-growliora-gray">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          Project ID: {projectData.id}
                        </span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          Started: {new Date(projectData.startDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="inline-block bg-orange-gradient p-[1px] rounded-lg">
                        <div className="bg-zinc-900 px-4 py-2 rounded-lg">
                          <span className="block text-sm text-growliora-gray">Project Type</span>
                          <span className="font-medium">{projectData.projectType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Overall Progress</span>
                      <span className="font-medium">{projectData.progress}%</span>
                    </div>
                    <div className="w-full bg-growliora-gray/20 rounded-full h-3">
                      <div 
                        className="bg-orange-gradient h-3 rounded-full animate-progress transition-all duration-1000 ease-out" 
                        style={{ width: `${projectData.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <span className="block text-sm text-growliora-gray mb-1">Start Date</span>
                      <span className="font-medium">{new Date(projectData.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <span className="block text-sm text-growliora-gray mb-1">Expected Completion</span>
                      <span className="font-medium">{projectData.dueDate === "Ongoing" ? "Ongoing Service" : new Date(projectData.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                {/* Task Progress */}
                <div className="bg-zinc-900/50 border border-growliora-gray/20 rounded-xl p-6 md:p-8 mb-8">
                  <h3 className="text-xl font-bold mb-6">Task Progress</h3>
                  
                  {projectData.tasks.map((task: any, index: number) => (
                    <ProgressBar 
                      key={index}
                      label={task.name}
                      progress={task.progress}
                    />
                  ))}
                </div>
                
                {/* Recent Updates */}
                <div className="bg-zinc-900/50 border border-growliora-gray/20 rounded-xl p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-6">Recent Updates</h3>
                  
                  <div className="space-y-4">
                    {projectData.updates.map((update: any, index: number) => (
                      <div 
                        key={index}
                        className="border-l-2 border-growliora-coral pl-4 pb-4"
                      >
                        <span className="block text-sm text-growliora-coral mb-1">
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                        <p>{update.message}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-growliora-gray mb-4">
                      Have questions about your project?
                    </p>
                    <Link to="/contact">
                      <Button className="bg-growliora-coral hover:bg-growliora-coral/90 text-white btn-glow">
                        Contact Project Manager
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
      
      {!projectData && !error && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Project Management"
                  className="w-full max-w-md mx-auto rounded-lg mb-8 border border-growliora-gray/20"
                />
                <h3 className="text-2xl font-bold mb-4">Real-Time Project Tracking</h3>
                <p className="text-growliora-gray mb-8 max-w-2xl mx-auto">
                  As a Growliora client, you can track the progress of your projects in real-time. 
                  Enter your Project ID or Client Name above to view detailed status updates.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectsPage;
