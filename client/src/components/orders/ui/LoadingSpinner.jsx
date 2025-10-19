export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-4 
                      border-blue-400 border-t-transparent" />
    </div>
  );
}
