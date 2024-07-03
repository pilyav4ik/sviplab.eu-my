'use client';

import { useState } from 'react';
import Project from '../components/project';
import Modal from '../components/modal';
import Link from 'next/link';

export default function Projects({ projects, services }:any) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project:any, index:any) => (
          <Link href={"project/" + project.slug} key={index} className='cursor-none'>
            <Project
              index={index} 
              previewImageURL={project.previewImageURL}
              title={project.title}
              services={project.services}
              setModal={setModal} />
          </Link>
        ))}

      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
