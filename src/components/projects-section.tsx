import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, ChevronUp, X } from "lucide-react";
import { projectsData, ProjectData } from "@/data/projects-data";

export function ProjectsSection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    teamSize: [] as string[],
    teams: [] as string[],
    duration: [] as string[]
  });

  // Extract unique values for filter options
  const teamSizeOptions = [...new Set(projectsData.map(p => p.teamSize))];
  const teamOptions = [...new Set(projectsData.flatMap(p => p.teams))];
  const durationRanges = [
    { label: "Short (1-6 months)", min: 1, max: 6 },
    { label: "Medium (7-12 months)", min: 7, max: 12 },
    { label: "Long (13+ months)", min: 13, max: 100 }
  ];

  // Filter projects based on active filters
  const filteredProjects = projectsData.filter(project => {
    const teamSizeMatch = filters.teamSize.length === 0 || filters.teamSize.includes(project.teamSize);
    const teamMatch = filters.teams.length === 0 || filters.teams.some(team => project.teams.includes(team));
    const durationMatch = filters.duration.length === 0 || filters.duration.some(range => {
      const rangeObj = durationRanges.find(r => r.label === range);
      return rangeObj && project.duration >= rangeObj.min && project.duration <= rangeObj.max;
    });
    
    return teamSizeMatch && teamMatch && durationMatch;
  });

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      teamSize: [],
      teams: [],
      duration: []
    });
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

  const getTechColor = (tech: string) => {
    const colors = {
      'WEBAPP': 'bg-blue-100 text-blue-700',
      'MOBILE': 'bg-green-100 text-green-700',
      'Stream': 'bg-purple-100 text-purple-700',
      'INFRA': 'bg-orange-100 text-orange-700',
      'Solution': 'bg-pink-100 text-pink-700'
    };
    return colors[tech as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getTeamSizeLabel = (size: string) => {
    const labels = {
      'S': 'Small Team',
      'M': 'Medium Team',
      'L': 'Large Team'
    };
    return labels[size as keyof typeof labels] || 'Team';
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Project Portfolio</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive showcase of projects across government, media, retail, and cultural sectors
          </p>
        </div>

        {/* Filter Module */}
        <div className="mb-12">
          {/* Filter Button */}
          <div className="flex justify-center mb-6">
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filter Projects</span>
              {hasActiveFilters && (
                <Badge className="ml-2 bg-primary text-white text-xs">
                  {Object.values(filters).reduce((acc, arr) => acc + arr.length, 0)}
                </Badge>
              )}
              {isFilterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>

          {/* Collapsible Filter Panel */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isFilterOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 mx-auto max-w-4xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Filter Options</h3>
                {hasActiveFilters && (
                  <Button
                    onClick={clearAllFilters}
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Team Size Filter */}
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Team Size</h4>
                  <div className="space-y-2">
                    {teamSizeOptions.map(size => (
                      <label key={size} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.teamSize.includes(size)}
                          onChange={() => toggleFilter('teamSize', size)}
                          className="w-4 h-4 text-primary border-slate-300 dark:border-slate-600 rounded focus:ring-primary focus:ring-2 transition-colors"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {getTeamSizeLabel(size)} ({size})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Teams Filter */}
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Teams</h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {teamOptions.slice(0, 6).map(team => (
                      <label key={team} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.teams.includes(team)}
                          onChange={() => toggleFilter('teams', team)}
                          className="w-4 h-4 text-primary border-slate-300 dark:border-slate-600 rounded focus:ring-primary focus:ring-2 transition-colors"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {team}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration Filter */}
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Project Length</h4>
                  <div className="space-y-2">
                    {durationRanges.map(range => (
                      <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.duration.includes(range.label)}
                          onChange={() => toggleFilter('duration', range.label)}
                          className="w-4 h-4 text-primary border-slate-300 dark:border-slate-600 rounded focus:ring-primary focus:ring-2 transition-colors"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </p>
          {hasActiveFilters && (
            <Button
              onClick={() => setIsFilterOpen(true)}
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/80"
            >
              <Filter className="h-4 w-4 mr-1" />
              Active Filters ({Object.values(filters).reduce((acc, arr) => acc + arr.length, 0)})
            </Button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-white dark:bg-slate-900 project-card hover:shadow-xl transition-all duration-300 border-0 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-primary/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className={`${getTechColor(project.technology)} font-semibold`}>
                    {project.technology}
                  </Badge>
                  <span className="text-sm text-slate-500 bg-slate-50 px-2 py-1 rounded-full">
                    {project.duration} months
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-2 hover:text-primary transition-colors">
                  {project.customerType} Project
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500 bg-slate-50 px-2 py-1 rounded-full">
                    {getTeamSizeLabel(project.teamSize)}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {project.teams.slice(0, 2).map((team, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {team}
                      </span>
                    ))}
                    {project.teams.length > 2 && (
                      <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                        +{project.teams.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                
                {project.start && project.end && (
                  <div className="text-xs text-slate-400 border-t pt-2 mt-4">
                    📅 {project.start} - {project.end}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
