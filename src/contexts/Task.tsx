import { createContext } from 'react'
import type { TaskType } from '@/types/taskSchema';

export const TaskDataContext = createContext<{
  allTasks: TaskType[];
  setAllTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}>({
  allTasks: [],
  setAllTasks: () => {},
});
