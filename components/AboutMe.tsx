import { Terminal } from "./ui/terminal";

const AboutMe = () => {
  return (
    <section className="flex flex-col justify-center items-center my-3">
      <h2 className="text-gray-400 font-mono text-md  md:text-xl lg:text-2xl tracking-[0.3em] uppercase font-bold">
        About Me
      </h2>

      <div className="w-full py-10 md:py-20">
        <Terminal
          username="Prakhar-System"
          commands={[
            "git remote -v",
            "npm info @prakhar/profile",
            "npx university --status",
            "npm run build",
          ]}
          outputs={{
            0: [
              "✔ Repository connected: Managed by Prakhar Bhatt",
            ],
            1: [
              "✔ name: Prakhar Bhatt",
              "✔ role: 2nd Year B.Tech CS Student",
              "✔ interests: [Algorithms, Data Science, Logic Reasoning]"
            ],
            2: [
              "✔ Institution: Graphic Era Hill University",
              "✔ Course: B.Tech CSE"
            ],
            3: [
              "✔ Compiling ideas...",
              "✔ Injecting clean code...",
              "✔ Build successful: World-class solutions ready.",
            ],
          }}
          typingSpeed={45}
          delayBetweenCommands={1000}
          enableSound={true}
        />
      </div>
    </section>
  );
};

export default AboutMe;
