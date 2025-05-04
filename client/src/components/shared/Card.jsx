
import React from 'react';

export default function Card({ 
  title, 
  description, 
  date, 
  topRightLinks,
  topics,
  actionButton,
  url 
}) {
  return (
    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg flex flex-col h-[420px] w-full max-w-[320px]">
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          {date && (
            <p className="text-sm text-gray-500">
              {date.includes('Updated') ? 'Last updated: ' : 'Posted: '}
              {date}
            </p>
          )}
          {topRightLinks && (
            <div className="flex gap-4 text-2xl">
              {topRightLinks}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <a href={url} className="no-underline text-inherit">
            <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 line-clamp-3 mb-4">
              {description}
            </p>
          </a>

          {/* Topics */}
          {topics && topics.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-4">
              {topics.map((topic, index) => (
                <li key={`${topic}-${index}`} 
                    className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {topic}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Button */}
        {actionButton && (
          <div className="mt-auto flex justify-center">
            {actionButton}
          </div>
        )}
      </div>
    </div>
  );
}
