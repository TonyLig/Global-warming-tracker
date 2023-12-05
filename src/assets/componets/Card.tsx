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
    <div className=" rounded-xl shadow-lg shadow-neutral-900 md:shadow-xl md:shadow-neutral-900  relative overflow-hidden bg-cover bg-no-repeat">
      <img
        className="rounded-xl"
        src={imageCard}
        alt={accessibilityDescription}
      />
      <a href={pageLink}>
        <div className="flex items-center justify-center absolute inset-0 h-full w-full overflow-hidden backdrop-blur-md bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
          <h1 className="text-3xl text-slate-100 text font-sans font-bold p-4 rounded-xl">
            {titleCard}
          </h1>
        </div>
      </a>
    </div>
  );
}
