export type Area = "class-content" | "homework" | "teacher-resources";

export function classContentKey(params: { classNumber: number; filename: string }): string {
  const { classNumber, filename } = params;
  return `class-content/class-${classNumber}/${filename}`;
}

export function teacherResourceKey(filename: string): string {
  return `teacher-resources/${filename}`;
}

export type HomeworkStage = "original" | "good-pics" | "processed" | "final";

export function homeworkKey(params: {
  year: number;
  studentName: string; // free-form, we'll sanitize to folder-friendly
  classNumber: number;
  stage: HomeworkStage;
  filename: string;
}): string {
  const { year, studentName, classNumber, stage, filename } = params;
  return `homework/${year}/${slugify(studentName)}/class-${classNumber}/${stage}/${filename}`;
}

export function slugify(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
