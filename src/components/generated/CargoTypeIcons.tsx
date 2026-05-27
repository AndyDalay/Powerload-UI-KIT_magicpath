import * as React from 'react';
import { cn } from '@/lib/utils';
export interface CargoType {
  id: string;
  label: string; // Short display label
  title: string; // Full title used in cards
  description: string; // Description text from Figma
  iconUrl: string; // Figma asset URL
  checkIconUrl: string; // Checked state icon URL
}
export const CARGO_TYPES: CargoType[] = [{
  id: 'frigorifico',
  title: 'Frigorífico Temperatura controlada',
  label: 'Frigorífico',
  description: 'Transporte a temperatura controlada para alimentos perecederos, fármacos y flores.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/e87f7ed4-ae89-4c22-9b92-2f4f2f2df408.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/3f983036-9eed-4211-b495-6ff790888d35.svg'
}, {
  id: 'carga-general',
  title: 'Carga general',
  label: 'Carga general',
  description: 'Palets y bultos estándar: grupaje, FTL y LTL en ruta.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/2aefb91e-904d-41b3-8088-c450b2de674e.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/1d79ba83-9a83-4609-9646-2ceb3b8e2d74.svg'
}, {
  id: 'alimentacion-seca',
  title: 'Alimentación seca',
  label: 'Alimentación seca',
  description: 'Bebidas, conservas y materias primas no perecederas bien embaladas.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/d55bcf6f-ba7a-4f49-88a6-d6ba7b96fca9.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/faf2b5a2-8082-4477-84df-8efdd036fa8a.svg'
}, {
  id: 'industrial',
  title: 'Industrial / Maquinaria pesada',
  label: 'Industrial',
  description: 'Maquinaria industrial y de construcción, piezas voluminosas y componentes metálicos.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/05a51215-c4a7-447b-b7fc-b4c8616e5fd8.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/16fe92ea-a12c-429e-8179-5b0d5f69c6a1.svg'
}, {
  id: 'adr',
  title: 'ADR / Mercancías peligrosas',
  label: 'ADR / Peligrosas',
  description: 'Químicos, combustibles y gases con etiquetado ADR y medidas de seguridad.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/f44e573e-8701-4cc0-98cc-af2d469264e7.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/05b3d587-89e9-4632-aa16-cf9520a60765.svg'
}, {
  id: 'granel-solido',
  title: 'Granel sólido',
  label: 'Granel sólido',
  description: 'Cereales, pienso, áridos o minerales cargados a granel.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/31f52891-854b-4948-915c-2cf38922884a.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/caa4f06f-c24a-489e-a5a2-e8368b0fd030.svg'
}, {
  id: 'granel-liquido',
  title: 'Granel líquido / Cisternas',
  label: 'Granel líquido',
  description: 'Combustibles, leche, aceites o químicos líquidos en cisternas.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/dc6c0317-87de-4b38-b98a-44a1ec646105.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/603dfec9-ffc7-468a-9ee1-dc83c8da3755.svg'
}, {
  id: 'contenedores',
  title: 'Contenedores / Intermodal',
  label: 'Contenedores',
  description: 'Contenedores estándar ISO en transporte marítimo, ferroviario y aéreo.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/0adb0adf-93ae-4e64-bea7-a25195d3b658.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/a91bae1d-a225-40ad-a3bb-99ed838d1b12.svg'
}, {
  id: 'expres',
  title: 'Exprés / Paquetería urgente',
  label: 'Exprés',
  description: 'Entrega urgente de paquetes: ecommerce, courier y última milla.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/6ec5d846-6c99-4e45-8d6e-bc2b9de4c983.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/2ddd396b-11dc-4a3a-bc13-245b249eaad6.svg'
}, {
  id: 'sobredimensionado',
  title: 'Sobredimensionado / Especial',
  label: 'Sobredimensionado',
  description: 'Cargas fuera de gálibo: vigas, equipos pesados, aerogeneradores.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/c7ce7057-ce9b-482e-a01a-9c2731246f22.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/27205095-8e7f-4e3b-9b04-32ec5cc13bac.svg'
}, {
  id: 'animales',
  title: 'Animales vivos',
  label: 'Animales vivos',
  description: 'Transporte especializado para ganado, caballos y animales de laboratorio.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/99512bcc-47db-4689-a144-4ec84424bf81.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/8cc509be-8958-4509-84f4-61bc4cb6a104.svg'
}, {
  id: 'mudanzas',
  title: 'Mudanzas y mobiliario',
  label: 'Mudanzas',
  description: 'Traslado de hogares u oficinas: muebles, cajas y enseres.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/445b73a2-04ab-4c94-877f-3fdda3c9683d.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/9edb0f57-dd32-44bb-892e-6ef20dc0c914.svg'
}, {
  id: 'sanitario',
  title: 'Sanitario / Farmacéutico',
  label: 'Sanitario',
  description: 'Medicamentos, vacunas y material médico con control y trazabilidad.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/c9711df5-da47-4828-b1cf-b166d1355407.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/b59da95e-7851-4704-9c48-04d1b5e860eb.svg'
}, {
  id: 'residuos',
  title: 'Residuos',
  label: 'Residuos',
  description: 'Residuos urbanos e industriales, peligrosos y no peligrosos.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/593a8317-5c29-4b98-bc59-77fd61f9948f.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/27447675-a2ba-405b-9711-db2867dbf84d.svg'
}, {
  id: 'valores',
  title: 'Valores y mercancías de alto riesgo',
  label: 'Valores / Alto riesgo',
  description: 'Bienes de alto valor: dinero, joyas, arte y electrónica.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/4603486d-fd31-45d2-8f47-8601afb65356.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/4844e5b6-4fda-445f-a16e-b368d9dcafa0.svg'
}, {
  id: 'forestal',
  title: 'Forestal y agrícola',
  label: 'Forestal / Agrícola',
  description: 'Madera, troncos, biomasa y productos agrícolas sin procesar.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/1da506bf-79ca-46d6-867f-07284c9070cf.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/8f596f11-92d2-4def-a7c4-1521ea6552a4.svg'
}, {
  id: 'postal',
  title: 'Postal y mensajería',
  label: 'Postal',
  description: 'Cartas, documentación y paquetería ligera con seguimiento.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/b1636a8b-d81e-4147-a756-d4434dc8401b.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/75408e50-4e65-4edc-a02f-60df4cb21f7c.svg'
}, {
  id: 'automotriz',
  title: 'Automotriz',
  label: 'Automotriz',
  description: 'Transporte de coches, motos y flotas bajo protección.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/16f67da3-9a43-43b5-95fb-b808b9b736c0.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/a719f57b-6761-45cd-9f7f-ebe833dc4388.svg'
}, {
  id: 'arte',
  title: 'Obras de arte y exposiciones',
  label: 'Arte / Exposiciones',
  description: 'Arte y antigüedades para museos, ferias y exposiciones.',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/fabca283-c38b-4d96-8642-7b0765602d29.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/49966192-3e5a-4fe4-8815-41e096886f99.svg'
}];

// Individual named icon components
const IconBase = ({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className?: string;
}) => <img src={src} alt={alt} width="16" height="16" className={cn("w-4 h-4 object-contain", className)} style={{
  filter: 'brightness(0)'
}} />;
export const FrigorificoIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[0].iconUrl} alt="Frigorífico" {...props} />;
export const CargaGeneralIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[1].iconUrl} alt="Carga general" {...props} />;
export const AlimentacionSecaIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[2].iconUrl} alt="Alimentación seca" {...props} />;
export const IndustrialIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[3].iconUrl} alt="Industrial" {...props} />;
export const AdrIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[4].iconUrl} alt="ADR" {...props} />;
export const GranelSolidoIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[5].iconUrl} alt="Granel sólido" {...props} />;
export const GranelLiquidoIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[6].iconUrl} alt="Granel líquido" {...props} />;
export const ContenedoresIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[7].iconUrl} alt="Contenedores" {...props} />;
export const ExpresIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[8].iconUrl} alt="Exprés" {...props} />;
export const SobredimensionadoIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[9].iconUrl} alt="Sobredimensionado" {...props} />;
export const AnimalesIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[10].iconUrl} alt="Animales vivos" {...props} />;
export const MudanzasIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[11].iconUrl} alt="Mudanzas" {...props} />;
export const SanitarioIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[12].iconUrl} alt="Sanitario" {...props} />;
export const ResiduosIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[13].iconUrl} alt="Residuos" {...props} />;
export const ValoresIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[14].iconUrl} alt="Valores" {...props} />;
export const ForestalIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[15].iconUrl} alt="Forestal" {...props} />;
export const PostalIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[16].iconUrl} alt="Postal" {...props} />;
export const AutomotrizIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[17].iconUrl} alt="Automotriz" {...props} />;
export const ArteIcon = (props: {
  className?: string;
}) => <IconBase src={CARGO_TYPES[18].iconUrl} alt="Arte" {...props} />;
export const CargoTypeIconsShowcase = () => {
  return <div className="min-h-screen bg-white p-8 md:p-16 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-[#2A2A38] mb-2">
            Cargo Type Icons — Powerload UI Kit
          </h1>
          <p className="text-[#6B7280] text-lg">
            19 tipos de mercancías · Iconos 16×16 · Archivo: <code className="bg-[#F3F4F6] px-1 rounded text-[#2A2A38]">CargoTypeIcons.tsx</code>
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-20">
          {CARGO_TYPES.map(type => <article key={type.id} className="bg-[#F9F9FC] border border-[#D2D2E1] rounded-[8px] p-[12px] flex flex-col gap-3 hover:shadow-sm transition-shadow">
              <div className="w-[16px] h-[16px] flex items-center justify-center">
                <img src={type.iconUrl} alt={type.label} width="16" height="16" className="w-4 h-4 object-contain" style={{
              filter: 'brightness(0)'
            }} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-[#94A3B8] leading-none uppercase tracking-wider">
                  {type.id}
                </span>
                <h3 className="text-sm font-semibold text-[#2A2A38] leading-tight">
                  {type.label}
                </h3>
              </div>
            </article>)}
        </section>

        <section className="mt-24">
          <h2 className="text-xl font-bold text-[#2A2A38] mb-6">CARGO_TYPES Export Data</h2>
          <div className="overflow-x-auto border border-[#D2D2E1] rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9F9FC] border-bottom border-[#D2D2E1]">
                  <th className="px-6 py-4 text-xs font-bold text-[#64748B] uppercase tracking-wider">ID Slug</th>
                  <th className="px-6 py-4 text-xs font-bold text-[#64748B] uppercase tracking-wider">Label</th>
                  <th className="px-6 py-4 text-xs font-bold text-[#64748B] uppercase tracking-wider">Full Title</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D2D2E1]">
                {CARGO_TYPES.map(type => <tr key={type.id} className="hover:bg-[#F9F9FC]/50">
                    <td className="px-6 py-4 text-sm font-mono text-[#64748B]">{type.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A38]">{type.label}</td>
                    <td className="px-6 py-4 text-sm text-[#475569]">{type.title}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>;
};