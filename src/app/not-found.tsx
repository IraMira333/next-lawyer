import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <Image
        src="/404NotFound.png"
        alt="NotFound"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
