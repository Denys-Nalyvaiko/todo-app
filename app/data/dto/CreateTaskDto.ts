interface CreateTaskDto {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
}

export default CreateTaskDto;
