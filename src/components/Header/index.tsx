import { HeaderContainer, HeaderContent, NewTrasactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import { NewTrasanctionModal } from '../NewTrasanctionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTrasactionButton>Nova Transação</NewTrasactionButton>
          </Dialog.Trigger>

          <NewTrasanctionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
