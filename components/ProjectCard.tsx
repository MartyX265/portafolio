interface Props{
  title: string;
  description: string;
  imageUrl: string;
  link?:string;
  children?: React.ReactNode;
}
export default function ProjectCard({ title, description, imageUrl, link, children }: Props) {
  return (
    <div className="card bg-base-200/40 w-fit border border-base-300">
      <figure className="p-2 md:p-8">
        <img
          src={imageUrl}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title md:text-xl">{title}</h2>
        <p className="md:text-lg">
          {description}
        </p>
        <div className="card-actions justify-start">
          {children}
        </div>
      </div>
    </div>
  );
}
