import { useState } from 'react';
import './Accordion.scss';

/**
 * Accordion Component
 * 
 * Purpose: Expandable accordion component for FAQs
 * 
 * Props:
 * - items: Array of items with title and content properties
 * - defaultOpen: Index of item to be open by default
 * - allowMultiple: When true, allows multiple items to be open simultaneously
 * 
 * Usage:
 * <Accordion 
 *   items={[
 *     { title: 'Question 1', content: 'Answer 1' },
 *     { title: 'Question 2', content: 'Answer 2' }
 *   ]} 
 *   defaultOpen={0}
 * />
 */

export interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
  allowMultiple?: boolean;
  className?: string;
}

const Accordion = ({
  items,
  defaultOpen = -1,
  allowMultiple = false,
  className = ''
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>(
    defaultOpen >= 0 ? [defaultOpen] : []
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      // If multiple items can be open, toggle the clicked item
      setOpenItems(prevOpenItems =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter(item => item !== index)
          : [...prevOpenItems, index]
      );
    } else {
      // If only one item can be open, either close it or open a different one
      setOpenItems(prevOpenItems =>
        prevOpenItems.includes(index) ? [] : [index]
      );
    }
  };

  const isItemOpen = (index: number) => openItems.includes(index);

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion__item ${isItemOpen(index) ? 'accordion__item--open' : ''}`}
        >
          <button
            className="accordion__header"
            onClick={() => toggleItem(index)}
            aria-expanded={isItemOpen(index)}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="accordion__title">{item.title}</span>
            <span className="accordion__icon"></span>
          </button>
          <div
            id={`accordion-content-${index}`}
            className="accordion__content"
            aria-hidden={!isItemOpen(index)}
            style={{
              maxHeight: isItemOpen(index) ? '1000px' : '0',
              opacity: isItemOpen(index) ? 1 : 0
            }}
          >
            <div className="accordion__content-inner">
              {typeof item.content === 'string' ? (
                <p>{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
