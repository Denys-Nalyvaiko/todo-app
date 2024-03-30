interface CreateTaskDto {
  title: string;
  description: string;
  date: string;
  is_completed: boolean;
  is_important: boolean;
}

export default CreateTaskDto;
