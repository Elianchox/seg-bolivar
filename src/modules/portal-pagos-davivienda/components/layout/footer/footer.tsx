import Image from "next/image";
import vigilado from "@davivienda-pagos/assets/vigilado.png";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-footer py-[14px]">
      <div className="mx-auto flex w-full items-center px-[15px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
        <div className="w-[150px] shrink-0">
          <Image
            src={vigilado}
            alt="vigilado"
            width={150}
            height={20}
            className="h-[20px] w-full"
          />
        </div>
        <p className="m-0 text-[14px] leading-[21px] text-white">
          Banco Davivienda S.A. todos los derechos reservados 2020
        </p>
      </div>
    </footer>
  );
}