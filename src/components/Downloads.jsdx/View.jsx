import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'


function ViewsPdf(vendas) {
    
    pdfMake.vfs = pdfFonts.vfs
     

    const titulo = 'Historico de Vendas'
   

    const rodape = ''

    const docdefinitivo = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [{text: titulo, fontSize: 16, bold:true, margin:[0,30,0,8], alignment: 'center' }],
        content: [
            {
                style: 'tableExample',
                
                
                table: {
                    headerRows:1,
                    
                    body: [ 
                        [{text: 'Produto Vendido', style: 'tableHeader'}, {text: 'Quantidade', style: 'tableHeader'},{text: 'Valor unitário', style: 'tableHeader'}, {text: 'Valor do produto', style: 'tableHeader'},{text: 'Data da venda', style: 'tableHeader'},{text: 'Hora', style: 'tableHeader'}],
                        ...vendas.map((item)=>{

                        const data = new Date(item.Venda_em).toLocaleDateString("pt-BR");
                        const hora = new Date(item.Venda_em).toLocaleTimeString("pt-BR");

                        return [item.produto_Vendido, item.Quantidade, item.Valor_uni , item.Valor_da_venda, data, hora ]
                        })
                        
                        
                        
                    ]
                },
                layout: 'lightHorizontalLines'
            },
        ],
        footer: [rodape],
    }
    
    pdfMake.createPdf(docdefinitivo).download()
    

}

export default ViewsPdf;