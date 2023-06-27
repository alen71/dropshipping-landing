import { create } from 'zustand'

type Props = {
  isPopupOpen: boolean
  setIsPopupOpen: (condition: boolean) => void
}

const useTogglePopup = create<Props>(set => ({
  isPopupOpen: false,
  setIsPopupOpen: condition => set({ isPopupOpen: condition })
}))

export default useTogglePopup
