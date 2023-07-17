import { Header } from "@/app/components/Header";
import { TaskInput } from "./components/TaskInput";
import { Task } from "./components/Task";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    // Main container
    <div>
      <Header></Header>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* task */}
        <Task title="Read a book"></Task>
        {/* task */}
        <Task title="Take a shower"></Task>
        {/* task */}
        <Task title="Sleep"></Task>
        {/* //footer section */}
      </div>
      <Footer
        year="2023"
        fullName="Nattapoom Pothongsunun"
        studentId="650610761"
      ></Footer>
    </div>
  );
}
