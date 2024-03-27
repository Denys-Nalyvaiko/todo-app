import toast from "react-hot-toast";

const printError = (error: any) => {
  if (error instanceof Error) {
    toast.error(error.message);
    return;
  }

  toast.error("An unknown error occured");
};

export default printError;
