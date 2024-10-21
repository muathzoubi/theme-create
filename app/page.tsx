'use client';

import { useState } from 'react';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Button } from './components/ui/button';

export default function ThemeMaker() {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [secondaryColor, setSecondaryColor] = useState('#10b981');
  const [borderRadius, setBorderRadius] = useState('0.375rem');
  const [fontSize, setFontSize] = useState('1rem');
  const [padding, setPadding] = useState('1rem');

  const generateCSS = () => {
    return `
:root {
  --primary-color: ${primaryColor};
  --secondary-color: ${secondaryColor};
  --border-radius: ${borderRadius};
  --font-size: ${fontSize};
  --padding: ${padding};
}

.login-box {
  background-color: white;
  border-radius: var(--border-radius);
  padding: var(--padding);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-size: var(--font-size);
  cursor: pointer;
}

.button:hover {
  background-color: ${primaryColor}dd;
}

.input {
  border: 1px solid #e2e8f0;
  border-radius: var(--border-radius);
  padding: 0.5rem;
  font-size: var(--font-size);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
  text-align: left;
}

.table th {
  background-color: var(--secondary-color);
  color: white;
}
    `.trim();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Theme Maker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Customize</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="primaryColor">Primary Color</Label>
              <Input
                type="color"
                id="primaryColor"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="secondaryColor">Secondary Color</Label>
              <Input
                type="color"
                id="secondaryColor"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="borderRadius">Border Radius</Label>
              <Input
                type="text"
                id="borderRadius"
                value={borderRadius}
                onChange={(e) => setBorderRadius(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="fontSize">Font Size</Label>
              <Input
                type="text"
                id="fontSize"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="padding">Padding</Label>
              <Input
                type="text"
                id="padding"
                value={padding}
                onChange={(e) => setPadding(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <Tabs defaultValue="login" className="w-full">
            <TabsList>
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="elements">Elements</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <div
                className="login-box"
                style={{
                  backgroundColor: 'white',
                  borderRadius: borderRadius,
                  padding: padding,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 className="text-lg font-semibold mb-4">Login</h3>
                <Input
                  className="mb-2"
                  placeholder="Username"
                  style={{
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                  }}
                />
                <Input
                  className="mb-2"
                  type="password"
                  placeholder="Password"
                  style={{
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                  }}
                />
                <Button
                  style={{
                    backgroundColor: primaryColor,
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                  }}
                >
                  Log In
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="elements">
              <div className="space-y-4">
                <Button
                  style={{
                    backgroundColor: primaryColor,
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                  }}
                >
                  Button
                </Button>
                <Input
                  placeholder="Input"
                  style={{
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                  }}
                />
                <div className="overflow-x-auto">
                  <table
                    className="w-full"
                    style={{
                      borderCollapse: 'collapse',
                      fontSize: fontSize,
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            backgroundColor: secondaryColor,
                            color: 'white',
                            padding: '0.5rem',
                            textAlign: 'left',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          Header 1
                        </th>
                        <th
                          style={{
                            backgroundColor: secondaryColor,
                            color: 'white',
                            padding: '0.5rem',
                            textAlign: 'left',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          Header 2
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            padding: '0.5rem',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          Row 1, Cell 1
                        </td>
                        <td
                          style={{
                            padding: '0.5rem',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          Row 1, Cell 2
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: '0.5rem',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          Row 2, Cell 1
                        </td>
                        <td
                          style={{
                            padding: '0.5rem',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          Row 2, Cell 2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Generated CSS</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{generateCSS()}</code>
        </pre>
      </div>
    </div>
  );
}
