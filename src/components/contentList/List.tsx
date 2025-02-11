import Image from 'next/image';

export const List = ({
  item,
}: {
  item: { imgPath: string; label: string };
}) => {
  return (
    <div className="list-item">
      <div className="list-item-image">
        <Image src={item.imgPath} alt={item.label} objectFit="cover" fill />
      </div>
      <div className="list-item-label font-large">{item.label}</div>
    </div>
  );
};
