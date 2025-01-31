import React, { useRef, useState } from 'react';

import './Admin.scss';
import { IProjectData } from '../../shared/interfaces/projects';
import { FirebaseServices } from '../../shared/services/firebase/firebase';

const Admin: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [projectData, setProjectData] = useState<IProjectData>({
    id: '',
    title: '',
    description: '',
    image: '',
    technologies: [],
    releaseData: {
      isPublished: false,
      releaseDate: '',
      urls: {}
    }
  });
  const uploadProject = () => {
    try {
      FirebaseServices.addProject(projectData);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const technologies = e.target.value.split(',').map((tech) => tech.trim());
    setProjectData((prev) => ({ ...prev, technologies }));
  };

  const handleReleaseDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setProjectData((prev) => ({
      ...prev,
      releaseData: {
        ...prev.releaseData,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }
    }));
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({
      ...prev,
      releaseData: {
        ...prev.releaseData,
        urls: {
          ...prev.releaseData.urls,
          [name]: value
        }
      }
    }));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    uploadProject();
  };

  return (
    <div className="project-upload">
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={projectData.title} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            required
          />
          {projectData.image && (
            <img src={projectData.image || '/placeholder.svg'} alt="Vista previa" className="image-preview" />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="technologies">Technologies (comma-separated)</label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={projectData.technologies.join(', ')}
            onChange={handleTechnologiesChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="isPublished">
            <input
              type="checkbox"
              id="isPublished"
              name="isPublished"
              checked={projectData.releaseData.isPublished}
              onChange={handleReleaseDataChange}
            />
            Is Published
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={projectData.releaseData.releaseDate}
            onChange={handleReleaseDataChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="github">GitHub URL</label>
          <input
            type="url"
            id="github"
            name="github"
            value={projectData.releaseData.urls.github || ''}
            onChange={handleUrlChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="demo">Demo URL</label>
          <input
            type="url"
            id="demo"
            name="demo"
            value={projectData.releaseData.urls.demo || ''}
            onChange={handleUrlChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="appstore">App Store URL</label>
          <input
            type="url"
            id="appstore"
            name="appstore"
            value={projectData.releaseData.urls.appstore || ''}
            onChange={handleUrlChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="playstore">Play Store URL</label>
          <input
            type="url"
            id="playstore"
            name="playstore"
            value={projectData.releaseData.urls.playstore || ''}
            onChange={handleUrlChange}
          />
        </div>

        <button type="submit">Upload Project</button>
      </form>
    </div>
  );
};

export default Admin;
