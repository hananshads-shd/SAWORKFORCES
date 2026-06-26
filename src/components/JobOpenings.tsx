import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  MapPin,
  Clock,
  Banknote,
  Briefcase,
  SlidersHorizontal,
  X,
  FileCheck2,
  ChevronRight,
  Upload,
  Sparkles,
  Award,
  CheckCircle2,
  Plus,
  Trash2,
  Edit,
  Lock,
  Unlock,
  Settings,
  RefreshCw,
  Check,
  LogIn,
  LogOut
} from "lucide-react";
import { JOBS_DATA } from "../data";
import { JobOpening } from "../types";

export function JobOpenings() {
  const [jobs, setJobs] = useState<JobOpening[]>(() => {
    const saved = localStorage.getItem("sa_jobs");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse sa_jobs from localStorage", e);
      }
    }
    return JOBS_DATA;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [activeApplyJob, setActiveApplyJob] = useState<JobOpening | null>(null);
  
  // Apply Form State
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("1-3 Years");
  
  // File Upload State
  const [dragActive, setDragActive] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  // Admin States
  const [showAdminPortal, setShowAdminPortal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("sa_admin_auth") === "true";
  });
  const [adminPasscode, setAdminPasscode] = useState("");
  const [authError, setAuthError] = useState("");
  const [editingJob, setEditingJob] = useState<JobOpening | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Job Form States
  const [formTitle, setFormTitle] = useState("");
  const [formDept, setFormDept] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formType, setFormType] = useState("Full-Time");
  const [formSalary, setFormSalary] = useState("");
  const [formExp, setFormExp] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formReqs, setFormReqs] = useState<string[]>(["", ""]);
  const [formIsHot, setFormIsHot] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleOpenAdmin = () => {
      setShowAdminPortal(true);
    };
    window.addEventListener("sa_open_admin", handleOpenAdmin);
    return () => {
      window.removeEventListener("sa_open_admin", handleOpenAdmin);
    };
  }, []);

  // Departments list for filter
  const departments = ["All", "Transportation & Premium Driver Services", "Logistics & Supply Chain Outsource", "Talent Acquisition Division", "Hospitality & Guest Relations"];
  // Employment types
  const jobTypes = ["All", "Full-Time", "Part-Time", "Contract"];

  // Filter logic
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requirements.some((req) => req.toLowerCase().includes(searchTerm.toLowerCase())) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDept === "All" || job.department === selectedDept;

    const matchesType = selectedType === "All" || job.type === selectedType;

    return matchesSearch && matchesDept && matchesType;
  });

  // Drag and Drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setAttachedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API parse of CV and submission
    setTimeout(() => {
      setSubmitting(false);
      setApplySuccess(true);
      
      // reset form elements shortly
      setTimeout(() => {
        setApplySuccess(false);
        setActiveApplyJob(null);
        setAttachedFile(null);
        setApplicantName("");
        setApplicantEmail("");
        setApplicantPhone("");
      }, 3000);
    }, 2000);
  };

  // Admin handlers
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasscode === "2024") {
      setIsAuthenticated(true);
      sessionStorage.setItem("sa_admin_auth", "true");
      setAdminPasscode("");
      setAuthError("");
    } else {
      setAuthError("Incorrect passcode. Access Denied.");
    }
  };

  const handleAdminLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("sa_admin_auth");
    setEditingJob(null);
    setIsAddingNew(false);
  };

  const handleResetJobs = () => {
    if (window.confirm("Are you sure you want to reset all job openings to default? Your custom openings will be lost.")) {
      setJobs(JOBS_DATA);
      localStorage.setItem("sa_jobs", JSON.stringify(JOBS_DATA));
    }
  };

  const handleDeleteJob = (id: string) => {
    if (window.confirm("Are you sure you want to delete this job opening?")) {
      const updated = jobs.filter((job) => job.id !== id);
      setJobs(updated);
      localStorage.setItem("sa_jobs", JSON.stringify(updated));
    }
  };

  const openAddJobForm = () => {
    setFormTitle("");
    setFormDept("Transportation & Premium Driver Services");
    setFormLocation("");
    setFormType("Full-Time");
    setFormSalary("");
    setFormExp("");
    setFormDesc("");
    setFormReqs(["", ""]);
    setFormIsHot(false);
    setEditingJob(null);
    setIsAddingNew(true);
  };

  const openEditJobForm = (job: JobOpening) => {
    setFormTitle(job.title);
    setFormDept(job.department);
    setFormLocation(job.location);
    setFormType(job.type);
    setFormSalary(job.salaryRange);
    setFormExp(job.experienceRequired);
    setFormDesc(job.description);
    setFormReqs([...job.requirements]);
    setFormIsHot(job.isHot || false);
    setEditingJob(job);
    setIsAddingNew(false);
  };

  const handleSaveJob = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate requirements
    const cleanedReqs = formReqs.filter(r => r.trim() !== "");
    if (cleanedReqs.length === 0) {
      alert("Please add at least one requirement.");
      return;
    }

    const jobData: JobOpening = {
      id: isAddingNew ? `job-${Date.now()}` : editingJob!.id,
      title: formTitle,
      department: formDept,
      location: formLocation,
      type: formType as any,
      salaryRange: formSalary,
      experienceRequired: formExp,
      description: formDesc,
      requirements: cleanedReqs,
      postedDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      isHot: formIsHot
    };

    let updated: JobOpening[];
    if (isAddingNew) {
      updated = [jobData, ...jobs];
    } else {
      updated = jobs.map(j => j.id === editingJob!.id ? jobData : j);
    }

    setJobs(updated);
    localStorage.setItem("sa_jobs", JSON.stringify(updated));
    
    // Close form
    setIsAddingNew(false);
    setEditingJob(null);
  };

  const handleAddReqField = () => {
    setFormReqs([...formReqs, ""]);
  };

  const handleRemoveReqField = (index: number) => {
    if (formReqs.length > 1) {
      setFormReqs(formReqs.filter((_, i) => i !== index));
    }
  };

  const handleReqChange = (index: number, val: string) => {
    const updated = [...formReqs];
    updated[index] = val;
    setFormReqs(updated);
  };

  return (
    <section id="jobs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-gold-dark rounded-full text-xs font-bold tracking-wider uppercase font-mono">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>CAREERS PORTAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display tracking-tight">
            Active Job Openings
          </h2>
          
          <div className="h-[3px] w-16 bg-brand-gold rounded-full" />
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are actively recruiting for immediate positions across Bangalore. Explore active corporate vacancies, executive driving slots, and logistics profiles below.
          </p>
        </motion.div>

        {/* Dynamic Controls / Filters */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 mb-12 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="job-search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs, skills, locations (e.g., 'Chauffeur', 'Bangalore')"
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-gold font-medium text-slate-700"
              />
            </div>

            {/* Department Dropdown */}
            <div className="md:col-span-3 flex flex-col">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-gold font-semibold text-slate-600"
              >
                <option value="All">All Departments</option>
                {departments.slice(1).map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Type Dropdown */}
            <div className="md:col-span-3 flex flex-col">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-gold font-semibold text-slate-600"
              >
                <option value="All">All Job Types</option>
                {jobTypes.slice(1).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filter Button */}
            <div className="md:col-span-1 flex items-center justify-center">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDept("All");
                  setSelectedType("All");
                }}
                className="text-xs font-bold text-slate-400 hover:text-brand-gold transition-colors underline cursor-pointer"
              >
                Reset
              </button>
            </div>

          </div>
        </div>

        {/* Dynamic Jobs Listing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  layout
                  key={job.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 hover:border-brand-blue/15 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Title + Tag */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{job.department}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-brand-blue font-display mt-0.5">{job.title}</h3>
                      </div>
                      
                      {job.isHot ? (
                        <span className="bg-amber-100 text-amber-800 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="h-3 w-3 fill-amber-500 text-amber-600" />
                          <span>Immediate</span>
                        </span>
                      ) : (
                        <span className="bg-slate-200 text-slate-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                          Active
                        </span>
                      )}
                    </div>

                    {/* Metadata Badges */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 pt-4 border-t border-slate-200/40">
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <MapPin className="h-4 w-4 text-brand-gold" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <Clock className="h-4 w-4 text-brand-gold" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium col-span-2">
                        <Banknote className="h-4 w-4 text-brand-gold" />
                        <span className="truncate">{job.salaryRange}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium col-span-2">
                        <Briefcase className="h-4 w-4 text-brand-gold" />
                        <span>{job.experienceRequired}</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {/* Brief Requirements list */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">Primary Sourcing Filters</span>
                      <ul className="space-y-1.5">
                        {job.requirements.slice(0, 2).map((req, i) => (
                          <li key={i} className="text-xs text-slate-600 font-medium flex items-start gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                            <span className="line-clamp-1">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Trigger */}
                  <button
                    onClick={() => setActiveApplyJob(job)}
                    className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                  >
                    <span>Apply For This Position</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="lg:col-span-2 py-16 text-center space-y-4">
                <p className="text-slate-400 font-mono text-sm font-bold">NO VACANCIES FOUND FOR YOUR KEYWORD</p>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try widening your filter parameters or search terms. Alternatively, submit a direct resume in our contact form below to be added to the Bangalore talent directory.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Apply Modal with Drag & Drop CV Upload */}
        <AnimatePresence>
          {activeApplyJob && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-brand-blue-dark/60 backdrop-blur-md"
                onClick={() => {
                  if (!submitting) setActiveApplyJob(null);
                }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full relative z-10 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto no-scrollbar text-left"
              >
                {/* Close modal */}
                <button
                  disabled={submitting}
                  onClick={() => setActiveApplyJob(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
                >
                  <X className="h-5 w-5 text-slate-500" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 bg-brand-blue-muted rounded-xl flex items-center justify-center">
                    <FileCheck2 className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-brand-gold uppercase">APPLY TO POSITION</span>
                    <h4 className="text-lg font-bold text-brand-blue font-display leading-snug">{activeApplyJob.title}</h4>
                  </div>
                </div>

                {applySuccess ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-4">
                    <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 animate-bounce">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h5 className="text-xl font-bold text-slate-800 font-display">Application Received!</h5>
                    <p className="text-sm text-slate-500">
                      We have parsed your resume successfully. Our sourcing managers for the <span className="font-bold text-brand-blue">{activeApplyJob.department}</span> division will call you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    {/* Basic Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                        <input
                          required
                          type="text"
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold text-sm"
                          placeholder="e.g., Karthik Kumar"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Mobile Number</label>
                        <input
                          required
                          type="tel"
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold text-sm"
                          placeholder="e.g., 63622 39481"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold text-sm"
                        placeholder="e.g., karthik@gmail.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Experience</label>
                      <select
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold text-sm font-medium text-slate-600"
                      >
                        <option>Below 1 Year</option>
                        <option>1 - 3 Years</option>
                        <option>3 - 5 Years</option>
                        <option>5+ Years Commercial / Corporate</option>
                      </select>
                    </div>

                    {/* Drag and Drop CV File Upload widget */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Upload Resume (PDF / DOCX)</label>
                      
                      <div
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                          dragActive
                            ? "border-brand-gold bg-brand-gold/5"
                            : attachedFile
                            ? "border-emerald-500 bg-emerald-50/10"
                            : "border-slate-200 hover:border-brand-blue/30 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.docx,.doc"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        {attachedFile ? (
                          <div className="flex flex-col items-center space-y-2">
                            <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                              <FileCheck2 className="h-5.5 w-5.5" />
                            </div>
                            <span className="text-xs font-bold text-slate-700">{attachedFile.name}</span>
                            <span className="text-[10px] text-slate-400">{(attachedFile.size / 1024 / 1024).toFixed(2)} MB • Tap to replace</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center space-y-2">
                            <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                              <Upload className="h-5.5 w-5.5" />
                            </div>
                            <p className="text-xs text-slate-600 font-medium">
                              <span className="text-brand-blue font-bold">Drag and drop resume here</span> or click to upload
                            </p>
                            <span className="text-[10px] text-slate-400">PDF, DOCX formats up to 5MB</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit actions */}
                    <div className="pt-2">
                      <button
                        required
                        disabled={submitting}
                        type="submit"
                        className={`w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
                          submitting ? "opacity-75 cursor-wait" : ""
                        }`}
                      >
                        {submitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Parsing & Submitting Application...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application Sourcing File</span>
                            <ChevronRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Admin Portal Section Trigger */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
          <button
            onClick={() => setShowAdminPortal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-brand-blue text-xs font-mono font-bold rounded-lg border border-slate-200/60 transition-all hover:scale-105 cursor-pointer"
          >
            <Settings className="h-3.5 w-3.5" />
            <span>SA CAREERS ADMIN PORTAL</span>
          </button>
        </div>

        {/* Admin Portal Overlay Modal */}
        <AnimatePresence>
          {showAdminPortal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-brand-blue-dark/70 backdrop-blur-md"
                onClick={() => setShowAdminPortal(false)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-4xl w-full relative z-10 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto no-scrollbar text-left"
              >
                {/* Close Modal */}
                <button
                  onClick={() => setShowAdminPortal(false)}
                  className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors focus:outline-none cursor-pointer"
                >
                  <X className="h-5 w-5 text-slate-500" />
                </button>

                {!isAuthenticated ? (
                  /* Admin Login Form */
                  <div className="max-w-md mx-auto py-8 text-center space-y-6">
                    <div className="h-14 w-14 bg-amber-50 rounded-full flex items-center justify-center text-brand-gold mx-auto border border-amber-100">
                      <Lock className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-brand-blue font-display">Careers Admin Authentication</h3>
                      <p className="text-xs text-slate-500 mt-1">Please enter your 4-digit security code to update job listings</p>
                    </div>

                    <form onSubmit={handleAdminLogin} className="space-y-4">
                      <div>
                        <input
                          type="password"
                          placeholder="Enter Security Code"
                          value={adminPasscode}
                          onChange={(e) => {
                            setAdminPasscode(e.target.value);
                            setAuthError("");
                          }}
                          autoFocus
                          className="w-full text-center px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xl tracking-widest text-slate-700 focus:bg-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                        />
                        {authError && (
                          <p className="text-rose-600 text-xs font-bold mt-2 font-mono">{authError}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                      >
                        <LogIn className="h-4 w-4" />
                        <span>Authenticate Access</span>
                      </button>
                    </form>
                  </div>
                ) : (
                  /* Authenticated Admin Control Room */
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-brand-gold">
                          <Settings className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">Live Session</span>
                            <span className="text-xs text-slate-400 font-medium">Code: 2024 Verified</span>
                          </div>
                          <h3 className="text-xl font-bold text-brand-blue font-display leading-tight">SA Workforce Careers Admin Panel</h3>
                        </div>
                      </div>

                      {/* Main Controls Row */}
                      <div className="flex flex-wrap items-center gap-2">
                        {!isAddingNew && !editingJob ? (
                          <button
                            onClick={openAddJobForm}
                            className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <Plus className="h-4 w-4" />
                            <span>Add Opening</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setIsAddingNew(false);
                              setEditingJob(null);
                            }}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <X className="h-4 w-4" />
                            <span>Back to List</span>
                          </button>
                        )}
                        
                        <button
                          onClick={handleResetJobs}
                          className="bg-slate-50 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200 hover:border-rose-200 font-semibold px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                          title="Reset to original default jobs"
                        >
                          <RefreshCw className="h-3.5 w-3.5" />
                          <span>Reset Default</span>
                        </button>

                        <button
                          onClick={handleAdminLogout}
                          className="bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <LogOut className="h-3.5 w-3.5" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>

                    {/* Form to Add or Edit Job Opening */}
                    {((isAddingNew || editingJob !== null)) ? (
                      <form onSubmit={handleSaveJob} className="space-y-4 pt-2">
                        <h4 className="text-sm font-extrabold text-brand-blue uppercase tracking-wider mb-2 font-mono text-left border-l-4 border-brand-gold pl-2">
                          {isAddingNew ? "Create New Job Vacancy" : `Edit Vacancy: ${editingJob?.title}`}
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Job Title</label>
                            <input
                              required
                              type="text"
                              value={formTitle}
                              onChange={(e) => setFormTitle(e.target.value)}
                              placeholder="e.g., Senior iOS Developer"
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-brand-gold focus:bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Department</label>
                            <select
                              value={formDept}
                              onChange={(e) => setFormDept(e.target.value)}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-brand-gold focus:bg-white font-medium"
                            >
                              <option value="Transportation & Premium Driver Services">Transportation & Premium Driver Services</option>
                              <option value="Logistics & Supply Chain Outsource">Logistics & Supply Chain Outsource</option>
                              <option value="Talent Acquisition Division">Talent Acquisition Division</option>
                              <option value="Hospitality & Guest Relations">Hospitality & Guest Relations</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Location</label>
                            <input
                              required
                              type="text"
                              value={formLocation}
                              onChange={(e) => setFormLocation(e.target.value)}
                              placeholder="e.g., Bangalore (MG Road, Hybrid)"
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-brand-gold focus:bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Employment Type</label>
                            <select
                              value={formType}
                              onChange={(e) => setFormType(e.target.value)}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-brand-gold focus:bg-white font-medium"
                            >
                              <option value="Full-Time">Full-Time</option>
                              <option value="Part-Time">Part-Time</option>
                              <option value="Contract">Contract</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Salary Range</label>
                            <input
                              required
                              type="text"
                              value={formSalary}
                              onChange={(e) => setFormSalary(e.target.value)}
                              placeholder="e.g., ₹30,000 - ₹35,000 / Month"
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-brand-gold focus:bg-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Experience Required</label>
                            <input
                              required
                              type="text"
                              value={formExp}
                              onChange={(e) => setFormExp(e.target.value)}
                              placeholder="e.g., 2+ Years in premium logistics operations"
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-brand-gold focus:bg-white"
                            />
                          </div>

                          <div className="flex items-center pt-6 pl-2">
                            <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={formIsHot}
                                onChange={(e) => setFormIsHot(e.target.checked)}
                                className="h-4.5 w-4.5 rounded border-slate-300 text-brand-gold focus:ring-brand-gold/40 cursor-pointer"
                              />
                              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Mark as Hot Job (Immediate Placement)</span>
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Short Description</label>
                          <textarea
                            required
                            rows={3}
                            value={formDesc}
                            onChange={(e) => setFormDesc(e.target.value)}
                            placeholder="Provide a clear, inviting overview of the daily duties, scope, and operational environment..."
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-brand-gold focus:bg-white resize-none"
                          />
                        </div>

                        {/* Requirements List Builder */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Key Candidate Requirements</label>
                            <button
                              type="button"
                              onClick={handleAddReqField}
                              className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-gold hover:text-brand-gold-light uppercase tracking-wider font-mono cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                              <span>Add Requirement</span>
                            </button>
                          </div>

                          <div className="space-y-2">
                            {formReqs.map((req, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <span className="text-xs font-mono font-bold text-slate-400 w-5">{index + 1}.</span>
                                <input
                                  required
                                  type="text"
                                  value={req}
                                  onChange={(e) => handleReqChange(index, e.target.value)}
                                  placeholder={`Requirement ${index + 1} (e.g. valid HMV badge)`}
                                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-brand-gold focus:bg-white"
                                />
                                <button
                                  type="button"
                                  disabled={formReqs.length <= 1}
                                  onClick={() => handleRemoveReqField(index)}
                                  className="p-2 text-slate-400 hover:text-rose-500 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors cursor-pointer"
                                  title="Remove Requirement"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Form Submission Buttons */}
                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAddingNew(false);
                              setEditingJob(null);
                            }}
                            className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-wider transition-all cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-blue-dark rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <Check className="h-4 w-4" />
                            <span>{isAddingNew ? "Create Opening" : "Save Changes"}</span>
                          </button>
                        </div>
                      </form>
                    ) : (
                      /* Jobs Directory Table/List */
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Live Sourcing Directory ({jobs.length} Jobs)</h4>
                          <span className="text-[10px] text-slate-400 italic">Click pencil to edit or trash can to delete immediately</span>
                        </div>

                        <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                          <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 grid grid-cols-12 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                            <div className="col-span-4">Job Title</div>
                            <div className="col-span-3">Department</div>
                            <div className="col-span-2">Location</div>
                            <div className="col-span-1">Type</div>
                            <div className="col-span-2 text-right">Actions</div>
                          </div>

                          <div className="divide-y divide-slate-100">
                            {jobs.map((j) => (
                              <div key={j.id} className="px-4 py-3.5 grid grid-cols-12 text-xs items-center hover:bg-slate-50/50 transition-colors">
                                <div className="col-span-4 font-bold text-brand-blue flex items-center gap-1.5 min-w-0 pr-2">
                                  <span className="truncate">{j.title}</span>
                                  {j.isHot && (
                                    <span className="h-1.5 w-1.5 bg-amber-500 rounded-full flex-shrink-0 animate-ping" />
                                  )}
                                </div>
                                <div className="col-span-3 text-slate-500 truncate pr-2">{j.department}</div>
                                <div className="col-span-2 text-slate-500 truncate pr-2">{j.location}</div>
                                <div className="col-span-1">
                                  <span className="bg-slate-100 text-slate-600 font-bold px-1.5 py-0.5 rounded text-[9px] uppercase">
                                    {j.type}
                                  </span>
                                </div>
                                <div className="col-span-2 flex items-center justify-end gap-1.5">
                                  <button
                                    onClick={() => openEditJobForm(j)}
                                    className="p-1.5 bg-slate-50 hover:bg-brand-gold/15 text-slate-500 hover:text-brand-blue rounded-lg transition-colors cursor-pointer"
                                    title="Edit Job Opening"
                                  >
                                    <Edit className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteJob(j.id)}
                                    className="p-1.5 bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                                    title="Delete Job Opening"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
