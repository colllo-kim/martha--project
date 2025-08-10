import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorContainer({ message }) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-3 rounded-lg bg-red-100 p-4 text-red-700 dark:bg-red-900 dark:text-red-200">
      <FaExclamationTriangle className="text-xl" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}