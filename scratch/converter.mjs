import fs from 'fs';

const html = fs.readFileSync('old_index_utf8.html', 'utf-8');

// Extract CSS
const cssMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
const css = cssMatch ? cssMatch[1] : '';

// Extract JS
const jsMatch = html.match(/<script>([\s\S]*?)<\/script>/i);
const js = jsMatch ? jsMatch[1] : '';

// Extract Body Content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<script/i) || html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Convert basic HTML to JSX
bodyContent = bodyContent.replace(/class=/g, 'className=');
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
bodyContent = bodyContent.replace(/<br>/g, '<br />');
bodyContent = bodyContent.replace(/<hr>/g, '<hr />');
bodyContent = bodyContent.replace(/<img([^>]+[^\/])>/g, '<img$1 />');
bodyContent = bodyContent.replace(/<input([^>]+[^\/])>/g, '<input$1 />');

// Remove some generic problematic JS handlers if any
bodyContent = bodyContent.replace(/onclick=/g, 'onClick=');

// Create the page.tsx content
const pageContent = `
"use client";
import React, { useEffect } from 'react';
import { Footer as ModemFooter } from "@/components/ui/modem-animated-footer";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function Home() {
  useEffect(() => {
    // Run original JS logic here if possible, though some DOM selectors might need updates.
    ${js}
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      <div className="ztyx-legacy-content" dangerouslySetInnerHTML={{ __html: \`${bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      
      {/* New React Components Appended */}
      <ModemFooter />
      <CinematicFooter />
    </>
  );
}
`;

fs.writeFileSync('app/page.tsx', pageContent);
console.log('Conversion completed successfully!');
