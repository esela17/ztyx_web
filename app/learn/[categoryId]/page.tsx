import React from 'react';
import CategoryCoursePageContent from "@/components/sections/CategoryCoursePageContent";

export default function CategoryCoursePage({ params }: { params: { categoryId: string } }) {
  return <CategoryCoursePageContent categoryId={params.categoryId} />;
}

export function generateStaticParams() {
  return [
    { categoryId: 'marketing' },
    { categoryId: 'development' },
    { categoryId: 'design' },
    { categoryId: 'video' },
    { categoryId: 'seo' },
    { categoryId: 'ai' }
  ];
}