interface Props {
  imageCard: string;
  pageLink: string;
  accessibilityDescription: string;
  titleCard: string;
}

export default function Card({
  imageCard,
  pageLink,
  accessibilityDescription,
  titleCard,
}: Props) {
  return (
    <div className=" relative mx-auto h-52 w-80 overflow-hidden rounded-xl  bg-cover bg-no-repeat shadow-lg shadow-neutral-900 md:shadow-xl md:shadow-neutral-900">
      <img
        className="h-52 w-80 rounded-xl object-cover"
        src={imageCard}
        alt={accessibilityDescription}
      />

      <a href={pageLink}>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl bg-fixed opacity-0 backdrop-blur-md transition duration-300 ease-in-out  hover:opacity-100">
          <h1 className="text font-sans text-3xl font-bold text-slate-100">
            {titleCard}
          </h1>
        </div>
      </a>
    </div>
  );
}
