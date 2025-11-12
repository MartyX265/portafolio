interface Props{
  title: string;
  description: string;
  imageUrl: string;
  link:string;
  children?: React.ReactNode;
}
export default function ProjectCard({ title, description, imageUrl, link, children }: Props) {
  return (
    <div className="card bg-[rgba(255,255,255,0.4)] w-fit border border-gray-300">
      <figure className="p-4">
        <img
          src={imageUrl}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          {children}
        </div>
      </div>
    </div>
  );
}
