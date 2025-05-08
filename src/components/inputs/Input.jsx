import '../css/input.css'
import { useProdutosContext } from '../../Context/produtoContext'
import { useState } from 'react'
import { PostCategoria } from '../../services/produtoServices'

export default function Input({ setnomeProduto, setprecoProduto, setqntProduto, setcategoriaselecionada }) {

    const { erro } = useProdutosContext()
    const { enviar } = useProdutosContext()
    const { Produtos } = useProdutosContext()
    const { Categoria } = useProdutosContext()
    const { setEnviando } = useProdutosContext()
    const { seterro } = useProdutosContext()

    const [CAT, setCAT] = useState('')
    const [Valor, setValor] = useState(false)



    const MudarValor = () => {
        setValor((prev) => !prev)
    }


    const enviarCategoria = async () => {

        if (CAT.length <= 0) {
            seterro('Nome de categoria invalido!')
            return
        }

        if (typeof CAT !== 'string' || !/^[A-Za-zÀ-ÿ\s]+$/.test(CAT)) {
            seterro('Nome da categoria deve conter apenas letras!')
        }

        try {



            await PostCategoria(CAT)
            setEnviando((prev) => prev + 1)
            setCAT("")
            setValor(false)
        } catch (err) {
            console.error("Erro ao salvar categoria:", err)
        }
    }

    console.log(Valor)


    return (

        <div className='inputs'>
            <label>Nome do produto:</label>
            <input type="text" placeholder="nome produto" onChange={(e) => setnomeProduto(e.target.value)}></input>
            <label>Preco do produto:</label>
            <input type="number" placeholder="preco do produto" className='preco' onChange={(e) => setprecoProduto(e.target.value)}></input>
            <label>Quantidade:</label>
            <input type="text" placeholder="quantidade de produtos" onChange={(e) => setqntProduto(e.target.value)}></input>

            {Valor === true && <div class="inputs categoria">
                <label>Nome da Categoria:</label>
                <input type="text" placeholder="nome da categoria" onChange={(e) => setCAT(e.target.value)}></input>
            </div>}

            {Categoria.length === 0 &&
                <div class="inputs categoria">
                    <label>Nome da Categoria:</label>
                    <input type="text" placeholder="nome da categoria" onChange={(e) => setCAT(e.target.value)}></input>
                    <button className='Cadastro' onClick={enviarCategoria}>Criar Categoria</button>
                </div>
            }


            {(Categoria.length === 0 && Valor === true) ?
                (<button className='Cadastro' onClick={enviarCategoria}>Adicionar Categoria</button>)
                : Categoria.length != 0 && Valor === false ?
                    (<button className='Cadastro' onClick={MudarValor}>Criar Categoria</button>)
                    : (Categoria.length != 0 && Valor === true) ?
                        (<button className='Cadastro' onClick={enviarCategoria}>Adicionar Categoria</button>) : null
            }


            {Categoria.length != 0 &&
                <div>


                    <select name="select" onChange={(e) => setcategoriaselecionada(e.target.value)} >
                        <option value=''>Escolha a categoria</option>
                        {Categoria.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.Categoria}</option>)}
                    </select>
                </div>
            }
            <button onClick={enviar}>enviar</button>
            {erro && <div style={{ color: 'red', marginBottom: '10px' }}>{erro}</div>}

        </div>

    )
}