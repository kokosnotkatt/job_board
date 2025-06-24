
import React, { useState } from 'react';
import {

  Minus
} from 'lucide-react';


interface FileData {
  name: string;
  url: string;
  type: string;
}


interface ProfileCardProps {
  title: string;
  content: string;
  onEdit: (cardId: string, content: string) => void;
  cardId: string;
}






const ProfileCard: React.FC<ProfileCardProps> = ({ title, content, onEdit, cardId }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>(content);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  
  // Form states for experience popup
  const [experienceForm, setExperienceForm] = useState({
    company: '',
    position: '',
    startDate: { day: '', month: '', year: '' },
    endDate: { day: '', month: '', year: '' },
    description: ''
  });

  // Form states for education popup
  const [educationForm, setEducationForm] = useState({
    institution: '',
    degree: '',
    duration: '',
    description: ''
  });

  // Form states for projects popup
  const [projectFiles, setProjectFiles] = useState<FileData[]>([]);

  // Form states for achievements popup
  const [achievementsForm, setAchievementsForm] = useState({
    description: '',
    startDate: { day: '', month: '', year: '' },
    endDate: { day: '', month: '', year: '' },
    details: ''
  });

  const handleSave = () => {
    if (cardId === 'experience') {
      // Format experience data
      const formattedExperience = `${experienceForm.position} ที่ ${experienceForm.company}\n${experienceForm.startDate.day}/${experienceForm.startDate.month}/${experienceForm.startDate.year} - ${experienceForm.endDate.day}/${experienceForm.endDate.month}/${experienceForm.endDate.year}\n${experienceForm.description}`;
      onEdit(cardId, formattedExperience);
    } else if (cardId === 'education') {
      // Format education data
      const formattedEducation = `${educationForm.degree} จาก ${educationForm.institution}\nระยะเวลา: ${educationForm.duration} ปี\n${educationForm.description}`;
      onEdit(cardId, formattedEducation);
    } else if (cardId === 'achievements') {
      // Format achievements data
      const formattedAchievements = `${achievementsForm.description}\nระยะเวลาฝึกงาน: ${achievementsForm.startDate.day}/${achievementsForm.startDate.month}/${achievementsForm.startDate.year} - ${achievementsForm.endDate.day}/${achievementsForm.endDate.month}/${achievementsForm.endDate.year}`;
      onEdit(cardId, formattedAchievements);
    } else {
      onEdit(cardId, editContent);
    }
    setIsEditing(false);
    setShowPopup(false);
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
    setShowPopup(false);
    setExperienceForm({
      company: '',
      position: '',
      startDate: { day: '', month: '', year: '' },
      endDate: { day: '', month: '', year: '' },
      description: ''
    });
    setEducationForm({
      institution: '',
      degree: '',
      duration: '',
      description: ''
    });
    setProjectFiles([]);
    setAchievementsForm({
      description: '',
      startDate: { day: '', month: '', year: '' },
      endDate: { day: '', month: '', year: '' },
      details: ''
    });
  };

  const handleEditClick = () => {
    if (cardId === 'about' || cardId === 'experience' || cardId === 'education' || cardId === 'projects' || cardId === 'achievements') {
      setShowPopup(true);
      if (cardId === 'about' || cardId === 'projects') {
        setEditContent(content);
      } else if (cardId === 'achievements') {
        setAchievementsForm(prev => ({ ...prev, description: content }));
      }
    } else {
      setIsEditing(true);
    }
  };

  // File upload handlers for projects
  const handleProjectFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const fileData: FileData[] = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type
    }));
    setProjectFiles(prev => [...prev, ...fileData]);
  };

  const removeProjectFile = (index: number) => {
    const updatedFiles = projectFiles.filter((_, i) => i !== index);
    setProjectFiles(updatedFiles);
  };

  // Popup for "ข้อมูลส่วนตัวของคุณ"
  if (showPopup && cardId === 'about') {
    return (
      <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 z-50">
          {/* Popup Panel */}
          <div className="fixed top-0 right-0 h-full w-1/2 bg-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out animate-slide-in-right">
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-lg font-normal text-gray-800 mb-8">ข้อมูลส่วนตัวของคุณ</h3>
              
              <div className="mb-8">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full h-48 bg-white border-2 border-gray-300 rounded-none p-4 text-sm text-gray-700 focus:outline-none focus:border-gray-400 resize-none"
                  placeholder=""
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button 
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-2 rounded-sm text-sm hover:bg-gray-500 transition-colors"
                >
                  ยกเลิก
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-teal-500 text-white px-6 py-2 rounded-sm text-sm hover:bg-teal-600 transition-colors"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Original Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-4 text-base">{title}</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 min-h-24">
            <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
          </div>
          <button 
            onClick={handleEditClick}
            className="text-teal-500 text-sm border border-teal-500 px-4 py-2 rounded hover:bg-teal-50"
          >
            แก้ไข →
          </button>
        </div>
        
        {/* Add custom CSS for animation */}
        <style >{`
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.3s ease-in-out;
          }
        `}</style>
      </>
    );
  }

  // Popup for "รายละเอียดเพิ่มเติม"
  if (showPopup && cardId === 'achievements') {
    return (
      <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 z-50">
          {/* Popup Panel */}
          <div className="fixed top-0 left-0 h-full w-1/2 bg-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out animate-slide-in-left overflow-y-auto">
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-lg font-normal text-gray-800 mb-8">รายละเอียดเพิ่มเติม</h3>
              
              <div className="space-y-6">
                {/* รายละเอียดหลัก */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">รายละเอียดหลัก</label>
                  <textarea
                    value={achievementsForm.description}
                    onChange={(e) => setAchievementsForm(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full h-32 bg-white border-2 border-gray-300 rounded-none p-4 text-sm text-gray-700 focus:outline-none focus:border-gray-400 resize-none"
                    placeholder="ใส่รายละเอียดหลักของข้อมูลเพิ่มเติม"
                  />
                </div>

                {/* วันเริ่ม */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วันเริ่ม</label>
                  <div className="flex space-x-2">
                    <select
                      value={achievementsForm.startDate.day}
                      onChange={(e) => setAchievementsForm(prev => ({ 
                        ...prev, 
                        startDate: { ...prev.startDate, day: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">DD</option>
                      {Array.from({length: 31}, (_, i) => (
                        <option key={i+1} value={String(i+1).padStart(2, '0')}>{String(i+1).padStart(2, '0')}</option>
                      ))}
                    </select>
                    <select
                      value={achievementsForm.startDate.month}
                      onChange={(e) => setAchievementsForm(prev => ({ 
                        ...prev, 
                        startDate: { ...prev.startDate, month: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">MM</option>
                      {Array.from({length: 12}, (_, i) => (
                        <option key={i+1} value={String(i+1).padStart(2, '0')}>{String(i+1).padStart(2, '0')}</option>
                      ))}
                    </select>
                    <select
                      value={achievementsForm.startDate.year}
                      onChange={(e) => setAchievementsForm(prev => ({ 
                        ...prev, 
                        startDate: { ...prev.startDate, year: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">YYYY</option>
                      {Array.from({length: 30}, (_, i) => (
                        <option key={2025-i} value={2025-i}>{2025-i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* วันสิ้นสุด */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วันสิ้นสุด</label>
                  <div className="flex space-x-2">
                    <select
                      value={achievementsForm.endDate.day}
                      onChange={(e) => setAchievementsForm(prev => ({ 
                        ...prev, 
                        endDate: { ...prev.endDate, day: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">DD</option>
                      {Array.from({length: 31}, (_, i) => (
                        <option key={i+1} value={String(i+1).padStart(2, '0')}>{String(i+1).padStart(2, '0')}</option>
                      ))}
                    </select>
                    <select
                      value={achievementsForm.endDate.month}
                      onChange={(e) => setAchievementsForm(prev => ({ 
                        ...prev, 
                        endDate: { ...prev.endDate, month: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">MM</option>
                      {Array.from({length: 12}, (_, i) => (
                        <option key={i+1} value={String(i+1).padStart(2, '0')}>{String(i+1).padStart(2, '0')}</option>
                      ))}
                    </select>
                    <select
                      value={achievementsForm.endDate.year}
                      onChange={(e) => setAchievementsForm(prev => ({ 
                        ...prev, 
                        endDate: { ...prev.endDate, year: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">YYYY</option>
                      {Array.from({length: 30}, (_, i) => (
                        <option key={2025-i} value={2025-i}>{2025-i}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-8">
                <button 
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-2 rounded-sm text-sm hover:bg-gray-500 transition-colors"
                >
                  ยกเลิก
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-teal-500 text-white px-6 py-2 rounded-sm text-sm hover:bg-teal-600 transition-colors"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Original Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-4 text-base">{title}</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 min-h-24">
            <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
          </div>
          <button 
            onClick={handleEditClick}
            className="text-teal-500 text-sm border border-teal-500 px-4 py-2 rounded hover:bg-teal-50"
          >
            แก้ไข →
          </button>
        </div>
        
        {/* Add custom CSS for animation */}
        <style >{`
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes slide-in-left {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.3s ease-in-out;
          }

          .animate-slide-in-left {
            animation: slide-in-left 0.3s ease-in-out;
          }
        `}</style>
      </>
    );
  }

  // Popup for "ผลงาน/โปรเจค"
  if (showPopup && cardId === 'projects') {
    return (
      <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 z-50">
          {/* Popup Panel */}
          <div className="fixed top-0 left-0 h-full w-1/2 bg-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out animate-slide-in-left overflow-y-auto">
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-lg font-normal text-gray-800 mb-8">ผลงาน/โปรเจค</h3>
              
              <div className="mb-6">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full h-48 bg-white border-2 border-gray-300 rounded-none p-4 text-sm text-gray-700 focus:outline-none focus:border-gray-400 resize-none"
                  placeholder=""
                />
              </div>

              {/* File Upload Section */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-gray-700 mb-4">แนบไฟล์ผลงาน</h4>
                
                {/* Display uploaded files */}
                {projectFiles.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {projectFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-3 border border-gray-300">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center">
                            <span className="text-xs text-teal-600">📄</span>
                          </div>
                          <span className="text-sm text-gray-700">{file.name}</span>
                        </div>
                        <button
                          onClick={() => removeProjectFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Upload button */}
                <label className="w-full inline-block text-teal-500 text-sm border border-teal-500 px-4 py-3 text-center cursor-pointer hover:bg-teal-50 bg-white">
                  แนบไฟล์
                  <input 
                    type="file" 
                    multiple 
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.zip,.rar"
                    onChange={handleProjectFileUpload} 
                    className="hidden" 
                  />
                </label>
              </div>
              
              <div className="flex justify-end space-x-3 mt-8">
                <button 
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-2 rounded-sm text-sm hover:bg-gray-500 transition-colors"
                >
                  ยกเลิก
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-teal-500 text-white px-6 py-2 rounded-sm text-sm hover:bg-teal-600 transition-colors"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Original Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-4 text-base">{title}</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 min-h-24">
            <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
          </div>
          <button 
            onClick={handleEditClick}
            className="text-teal-500 text-sm border border-teal-500 px-4 py-2 rounded hover:bg-teal-50"
          >
            แก้ไข →
          </button>
        </div>
        
        {/* Add custom CSS for animation */}
        <style >{`
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes slide-in-left {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.3s ease-in-out;
          }

          .animate-slide-in-left {
            animation: slide-in-left 0.3s ease-in-out;
          }
        `}</style>
      </>
    );
  }

  // Popup for "ข้อมูลการศึกษา"
  if (showPopup && cardId === 'education') {
    return (
      <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 z-50">
          {/* Popup Panel */}
          <div className="fixed top-0 right-0 h-full w-1/2 bg-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out animate-slide-in-right overflow-y-auto">
            <div className="p-8">
              <h3 className="text-lg font-normal text-gray-800 mb-8">เพิ่มข้อมูลการศึกษา</h3>
              
              <div className="space-y-6">
                {/* หลักสูตรหรือวิชาการศึกษา */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">หลักสูตรหรือวิชาการศึกษา</label>
                  <input
                    type="text"
                    value={educationForm.degree}
                    onChange={(e) => setEducationForm(prev => ({ ...prev, degree: e.target.value }))}
                    className="w-full bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    placeholder="วิทยาการคอมพิวเตอร์และเทคโนโลยี"
                  />
                </div>

                {/* สถาบันการศึกษา */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">สถาบันการศึกษา</label>
                  <input
                    type="text"
                    value={educationForm.institution}
                    onChange={(e) => setEducationForm(prev => ({ ...prev, institution: e.target.value }))}
                    className="w-full bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    placeholder="มหาวิทยาลัยเซนต์จอห์น"
                  />
                </div>

                {/* ระยะเวลาการศึกษา */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ระยะเวลาการศึกษา</label>
                  <select
                    value={educationForm.duration}
                    onChange={(e) => setEducationForm(prev => ({ ...prev, duration: e.target.value }))}
                    className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                  >
                    <option value="">เลือกระยะเวลา</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>

                {/* หลักสูตรอื่น ๆ */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">หลักสูตรอื่น ๆ <span className="text-gray-400">(ไม่บังคับกรอกข้อมูล)</span></label>
                  <textarea
                    value={educationForm.description}
                    onChange={(e) => setEducationForm(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full h-32 bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400 resize-none"
                    placeholder=""
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-8">
                <button 
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-2 rounded-sm text-sm hover:bg-gray-500 transition-colors"
                >
                  ยกเลิก
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-teal-500 text-white px-6 py-2 rounded-sm text-sm hover:bg-teal-600 transition-colors"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Original Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-4 text-base">{title}</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 min-h-24">
            <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
          </div>
          <button 
            onClick={handleEditClick}
            className="text-teal-500 text-sm border border-teal-500 px-4 py-2 rounded hover:bg-teal-50"
          >
            แก้ไข →
          </button>
        </div>
        
        {/* Add custom CSS for animation */}
        <style >{`
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.3s ease-in-out;
          }
        `}</style>
      </>
    );
  }
  if (showPopup && cardId === 'experience') {
    return (
      <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 z-50">
          {/* Popup Panel */}
          <div className="fixed top-0 right-0 h-full w-1/2 bg-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out animate-slide-in-right overflow-y-auto">
            <div className="p-8">
              <h3 className="text-lg font-normal text-gray-800 mb-8">ประสบการณ์การทำงานของคุณ</h3>
              
              <div className="space-y-6">
                {/* ตำแหน่งงาน */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ตำแหน่งงาน</label>
                  <input
                    type="text"
                    value={experienceForm.position}
                    onChange={(e) => setExperienceForm(prev => ({ ...prev, position: e.target.value }))}
                    className="w-full bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    placeholder="นักพัฒนาซอฟต์แวร์"
                  />
                </div>

                {/* บริษัท */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">บริษัท</label>
                  <input
                    type="text"
                    value={experienceForm.company}
                    onChange={(e) => setExperienceForm(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    placeholder="ABC Co., Ltd."
                  />
                </div>

                {/* วันเริ่ม */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วันเริ่ม</label>
                  <div className="flex space-x-2">
                    <select
                      value={experienceForm.startDate.day}
                      onChange={(e) => setExperienceForm(prev => ({ 
                        ...prev, 
                        startDate: { ...prev.startDate, day: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">DD</option>
                      {Array.from({length: 31}, (_, i) => (
                        <option key={i+1} value={String(i+1).padStart(2, '0')}>{String(i+1).padStart(2, '0')}</option>
                      ))}
                    </select>
                    <select
                      value={experienceForm.startDate.month}
                      onChange={(e) => setExperienceForm(prev => ({ 
                        ...prev, 
                        startDate: { ...prev.startDate, month: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">MM</option>
                      {Array.from({length: 12}, (_, i) => (
                        <option key={i+1} value={String(i+1).padStart(2, '0')}>{String(i+1).padStart(2, '0')}</option>
                      ))}
                    </select>
                    <select
                      value={experienceForm.startDate.year}
                      onChange={(e) => setExperienceForm(prev => ({ 
                        ...prev, 
                        startDate: { ...prev.startDate, year: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">YYYY</option>
                      {Array.from({length: 30}, (_, i) => (
                        <option key={2025-i} value={2025-i}>{2025-i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* วันสิ้นสุด */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วันสิ้นสุด</label>
                  <div className="flex space-x-2">
                    <select
                      value={experienceForm.endDate.day}
                      onChange={(e) => setExperienceForm(prev => ({ 
                        ...prev, 
                        endDate: { ...prev.endDate, day: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">DD</option>
                      {Array.from({length: 31}, (_, i) => (
                        <option key={i+1} value={String(i+1).padStart(2, '0')}>{String(i+1).padStart(2, '0')}</option>
                      ))}
                    </select>
                    <select
                      value={experienceForm.endDate.month}
                      onChange={(e) => setExperienceForm(prev => ({ 
                        ...prev, 
                        endDate: { ...prev.endDate, month: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">MM</option>
                      {Array.from({length: 12}, (_, i) => (
                        <option key={i+1} value={String(i+1).padStart(2, '0')}>{String(i+1).padStart(2, '0')}</option>
                      ))}
                    </select>
                    <select
                      value={experienceForm.endDate.year}
                      onChange={(e) => setExperienceForm(prev => ({ 
                        ...prev, 
                        endDate: { ...prev.endDate, year: e.target.value }
                      }))}
                      className="bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                    >
                      <option value="">YYYY</option>
                      {Array.from({length: 30}, (_, i) => (
                        <option key={2025-i} value={2025-i}>{2025-i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* รายละเอียดการทำงาน */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">รายละเอียดการทำงาน</label>
                  <textarea
                    value={experienceForm.description}
                    onChange={(e) => setExperienceForm(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full h-32 bg-white border border-gray-300 rounded-none p-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400 resize-none"
                    placeholder=""
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-8">
                <button 
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-2 rounded-sm text-sm hover:bg-gray-500 transition-colors"
                >
                  ยกเลิก
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-teal-500 text-white px-6 py-2 rounded-sm text-sm hover:bg-teal-600 transition-colors"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Original Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-4 text-base">{title}</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 min-h-24">
            <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
          </div>
          <button 
            onClick={handleEditClick}
            className="text-teal-500 text-sm border border-teal-500 px-4 py-2 rounded hover:bg-teal-50"
          >
            แก้ไข →
          </button>
        </div>
        
        {/* Add custom CSS for animation */}
        <style >{`
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.3s ease-in-out;
          }
        `}</style>
      </>
    );
  }

  if (isEditing) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-bold text-gray-800 mb-4 text-base">{title}</h3>
        <div className="mb-4">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder={'เพิ่ม' + title + 'ของคุณ'}
          />
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={handleSave}
            className="bg-teal-500 text-white px-4 py-2 rounded text-sm hover:bg-teal-600"
          >
            บันทึก
          </button>
          <button 
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="font-bold text-gray-800 mb-4 text-base">{title}</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 min-h-24">
        <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
      </div>
      <button 
        onClick={handleEditClick}
        className="text-teal-500 text-sm border border-teal-500 px-4 py-2 rounded hover:bg-teal-50"
      >
        แก้ไข →
      </button>
    </div>
  );
};

export default ProfileCard;