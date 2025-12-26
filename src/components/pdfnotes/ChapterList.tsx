import { useEffect, useState, useRef } from "react";
import { getChapters } from "../../services/resourceApi";
import gsap from "gsap";

interface Chapter {
  id: number;
  chapter: string;
  pdfUrl: string;
  pdfType: "OFFICIAL" | "OWN";
  actionType: "REDIRECT" | "DOWNLOAD";
  source: string;
}

interface Props {
  exam: string;
  className: string;
  subject: string;
  chemistryType?: "PART1" | "PART2" | null;
}

const CHEMISTRY_CATEGORY_MAP: Record<
  "PART1" | "PART2",
  string
> = {
  PART1: "PART1",
  PART2: "PART2",
};


export default function ChapterList({ exam, className, subject,chemistryType }: Props) {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!exam || !className || !subject) return;

  setLoading(true);
  setChapters([]);

  const category =
    (subject === "Chemistry" || subject === "Physics"  || subject === "Maths") && 
    (className === "class-11" || className === "class-12") &&
    chemistryType
      ? CHEMISTRY_CATEGORY_MAP[chemistryType]
      : undefined;

  getChapters(exam, className, subject, category)
    .then((data) => {
      if (
        (subject === "Chemistry" || subject === "Physics" || subject === "Maths") &&
        (className === "class-11" || className === "class-12") &&
        chemistryType
      ) {
        const expectedCategory = CHEMISTRY_CATEGORY_MAP[chemistryType];

        const filtered = data.filter(
          (item: { category: string; }) => item.category === expectedCategory
        );

        setChapters(filtered);
      } else {
        setChapters(data);
      }
    })
    .finally(() => setLoading(false));
}, [exam, className, subject, chemistryType]);


  useEffect(() => {
    if (chapters.length > 0 && containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".chapter-card");
      gsap.fromTo(
        cards,
        { opacity: 0, x: -50, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [chapters]);

  const redirectToPdf = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};


  const downloadPdf = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${filename}.pdf`;
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      alert("Failed to download PDF");
      console.error(error);
    }
  };

  if (loading) return <p>Loading PDFs...</p>;

  if (chapters.length === 0)
    return <p>No PDFs available yet.</p>;

  return (
    <div ref={containerRef}>
      {chapters.map((c) => (
        <div key={c.id} className="chapter-card">
          <span>{c.chapter}</span>

          <button
  onClick={() =>
    c.actionType === "REDIRECT"
      ? redirectToPdf(c.pdfUrl)
      : downloadPdf(c.pdfUrl, c.chapter)
  }
>
  {c.actionType === "REDIRECT"
    ? "View Official PDF"
    : "Download Notes"}
</button>

        </div>
      ))}
    </div>
  );
}