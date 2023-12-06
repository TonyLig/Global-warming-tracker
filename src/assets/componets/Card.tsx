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
    <div className=" relative h-52 w-80 overflow-hidden rounded-xl bg-cover  bg-no-repeat shadow-lg shadow-neutral-900 md:shadow-xl md:shadow-neutral-900">
      <img
        className="h-56 rounded-xl"
        src={imageCard}
        alt={accessibilityDescription}
      />
      <a href={pageLink}>
        <div className="absolute inset-0 flex h-56 w-80 items-center justify-center overflow-hidden bg-fixed opacity-0 backdrop-blur-md transition duration-300 ease-in-out hover:opacity-100">
          <h1 className="text rounded-xl p-4 font-sans text-3xl font-bold text-slate-100">
            {titleCard}
          </h1>
        </div>
      </a>
    </div>
  );
}
