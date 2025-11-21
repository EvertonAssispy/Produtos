import * as React from "react";

export default function DashProduto({icon, nameclass}) {
  const ativos = 0;
  const inativos = 0;
  const totalProdutos = 0;

  return (
    // self-start impede que o card do MUI estique este bloco verticalmente
    <div className="self-start h-auto w-full max-w-sm p-4 bg-white rounded-2xl shadow-sm flex items-center gap-4 border border-gray-100">
      {/* Ícone (menor) */}
     <div className="p-2 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
        {icon}
    </div>

      {/* Conteúdo do Card */}
      <div className="flex-1 flex flex-col">
        <span className="text-xs text-gray-500">{nameclass}</span>
        <span className="text-2xl font-bold text-gray-900">{totalProdutos}</span>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">Total disponível no sistema</span>
          <span className="text-xs text-gray-500">Ativos: {ativos} / Inativos: {inativos}</span>
        </div>
      </div>
    </div>
  );
}
