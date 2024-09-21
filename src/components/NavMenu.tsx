import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    BarChartBig,
    Video,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link";
  
  export function NavMenu() {
    return (
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/" className="flex flexr-row">
              <BarChartBig className="w-4 h-4 mr-2" />
              <span>Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard" className="flex flexr-row">
              <User className="w-4 h-4 mr-2" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href="/video" className="flex flexr-row">
            <Video className="w-4 h-4 mr-2" />
            <span>Cybersecurity Videos</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/quizz/new" className="flex flexr-row">
              <Plus className="w-4 h-4 mr-2" />
              <span>New Quiz</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/billing" className="flex flexr-row">
              <CreditCard className="w-4 h-4 mr-2" />
              <span>Subscription Plans</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="w-4 h-4 mr-2" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="w-4 h-4 mr-2" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="w-4 h-4 mr-2" />
          <Link href="https://github.com/SakshiDangi" className="flex flexr-row">
          <span>GitHub</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="w-4 h-4 mr-2" />
          <Link href="https://github.com/SakshiDangi/cryptaedu" className="flex flexr-row">
          <span>Support</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    )
  }