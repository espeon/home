import { useColorMode, IconButton } from '@chakra-ui/react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const DarkLightIcon = isDark ? IoMdMoon : IoMdSunny
  return (
    <IconButton onClick={toggleColorMode} isActive={isDark} icon={<DarkLightIcon/>} aria-label="toggle theme"/>
  )
}
