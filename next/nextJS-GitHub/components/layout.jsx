import Link from 'next/link'
import {Button} from 'antd'

export default ({children}) => (
  
  <>
    <header>
      <Link href='/a?id=5' as = '/a/5'>
        <Button>Index</Button>
      </Link>
      <Link href='/test/b'>
        <Button>test B</Button>
      </Link>
    </header>
    {children}
  </>
)