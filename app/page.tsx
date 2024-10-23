'use client'

import * as React from 'react'
import { Bell, ChevronDown, Home, Menu, Search, Settings, Users } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger,TabsContent } from './components/ui/tabs'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'
import { Slider } from './components/ui/slider'
import { Label } from './components/ui/label'



export default function ThemeMaker() {
  const [theme, setTheme] = React.useState({
    primaryColor: '#382062',
    secondaryColor: '#10b981',
    backgroundColor: '#f3f4f6',
    textColor: '#382062',
    navbarColor: '#382062',
    sidebarColor: '#fff',
    buttonColor: '#382062',
    buttonTextColor: '#ffffff',
    inputBorderColor: '#d1d5db',
    tableHeaderColor: '#f9fafb',
    tableBorderColor: '#e5e7eb',
    iconColor: '#382062',
    borderRadius: 8,
  })

  const updateTheme = (key: string, value: string | number) => {
    setTheme(prev => ({ ...prev, [key]: value }))
  }

  const generateCSS = () => {
    return `
:root {
  --primary-color: ${theme.primaryColor};
  --secondary-color: ${theme.secondaryColor};
  --background-color: ${theme.backgroundColor};
  --text-color: ${theme.textColor};
  --navbar-color: ${theme.navbarColor};
  --sidebar-color: ${theme.sidebarColor};
  --button-color: ${theme.buttonColor};
  --button-text-color: ${theme.buttonTextColor};
  --input-border-color: ${theme.inputBorderColor};
  --table-header-color: ${theme.tableHeaderColor};
  --table-border-color: ${theme.tableBorderColor};
  --icon-color: ${theme.iconColor};
  --border-radius: ${theme.borderRadius}px;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}

.tundra .header {
  all:unset !important;
  background-color: var(--navbar-color);
}

.sidebar {
  background-color: var(--sidebar-color);
}

.button {
  background-color: var(--button-color);
  color: var(--button-text-color);
  border-radius: var(--border-radius);
}

.input {
  border-color: var(--input-border-color);
  border-radius: var(--border-radius);
}

.table {
  border-radius: var(--border-radius);
  overflow: hidden;
}

.table th {
  background-color: var(--table-header-color);
}

.table td, .table th {
  border-color: var(--table-border-color);
}

.icon {
  color: var(--icon-color);
}
    `.trim()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Theme Maker</h1>
      <Tabs defaultValue="customize">
        <TabsList>
          <TabsTrigger value="customize">Customize</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="css">Generated CSS</TabsTrigger>
        </TabsList>
        <TabsContent value="customize">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(theme).map(([key, value]) => (
              <div key={key}>
                <Label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</Label>
                {key === 'borderRadius' ? (
                  <div className="flex items-center space-x-2">
                    <Slider
                      id={key}
                      min={0}
                      max={20}
                      step={1}
                      value={[value as number]}
                      onValueChange={([newValue]) => updateTheme(key, newValue)}
                    />
                    <span>{value}px</span>
                  </div>
                ) : (
                  <Input
                    type="color"
                    id={key}
                    value={value as string}
                    onChange={(e) => updateTheme(key, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <div className="border rounded-lg overflow-hidden" style={{backgroundColor: theme.backgroundColor, borderRadius: `${theme.borderRadius}px`}}>
            {/* Navbar */}
            <header className="p-4 .tundra .header" style={{backgroundColor: theme.navbarColor}}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Menu className="h-6 w-6" style={{color: theme.iconColor}} />
                  <span style={{color: theme.textColor}}>Logo</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Bell className="h-6 w-6" style={{color: theme.iconColor}} />
                  <ChevronDown className="h-6 w-6" style={{color: theme.iconColor}} />
                </div>
              </div>
            </header>
            <div className="flex">
              {/* Sidebar */}
              <aside className="w-64 p-4" style={{backgroundColor: theme.sidebarColor}}>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center space-x-2 rounded p-2" style={{color: theme.textColor, borderRadius: `${theme.borderRadius}px`}}>
                        <Home className="h-5 w-5" style={{color: theme.iconColor}} />
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center space-x-2 rounded p-2" style={{color: theme.textColor, borderRadius: `${theme.borderRadius}px`}}>
                        <Users className="h-5 w-5" style={{color: theme.iconColor}} />
                        <span>Users</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center space-x-2 rounded p-2" style={{color: theme.textColor, borderRadius: `${theme.borderRadius}px`}}>
                        <Settings className="h-5 w-5" style={{color: theme.iconColor}} />
                        <span>Settings</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
              {/* Main Panel */}
              <main className="flex-1 p-4">
                <h2 className="text-xl font-semibold mb-4" style={{color: theme.textColor}}>Dashboard</h2>
                <div className="mb-4">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="max-w-sm"
                    style={{borderColor: theme.inputBorderColor, borderRadius: `${theme.borderRadius}px`}}
                  />
                </div>
                <div className="mb-4 space-x-2">
                  <Button style={{backgroundColor: theme.buttonColor, color: theme.buttonTextColor, borderRadius: `${theme.borderRadius}px`}}>
                    Primary Action
                  </Button>
                  <Button variant="outline" style={{borderColor: theme.buttonColor, color: theme.buttonColor, borderRadius: `${theme.borderRadius}px`}}>
                    Secondary Action
                  </Button>
                </div>
                <div style={{borderRadius: `${theme.borderRadius}px`, overflow: 'hidden'}}>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead style={{backgroundColor: theme.tableHeaderColor, borderColor: theme.tableBorderColor}}>Name</TableHead>
                        <TableHead style={{backgroundColor: theme.tableHeaderColor, borderColor: theme.tableBorderColor}}>Email</TableHead>
                        <TableHead style={{backgroundColor: theme.tableHeaderColor, borderColor: theme.tableBorderColor}}>Role</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell style={{borderColor: theme.tableBorderColor}}>John Doe</TableCell>
                        <TableCell style={{borderColor: theme.tableBorderColor}}>john@example.com</TableCell>
                        <TableCell style={{borderColor: theme.tableBorderColor}}>Admin</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{borderColor: theme.tableBorderColor}}>Jane Smith</TableCell>
                        <TableCell style={{borderColor: theme.tableBorderColor}}>jane@example.com</TableCell>
                        <TableCell style={{borderColor: theme.tableBorderColor}}>User</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </main>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="css">
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{generateCSS()}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  )
}