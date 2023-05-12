import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import { FaBeer } from 'react-icons/fa'
import Colors from '../../constants/Colors'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitleStyle: {
          fontFamily: 'BrunoAceSCRegular',
        },
        headerRight: () => (
          <Link href='/contact' asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name='envelope'
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <TabBarIcon name='info' color={color} />,
        }}
      />
      <Tabs.Screen
        name='story'
        options={{
          title: 'Story',
          tabBarIcon: ({ color }) => <TabBarIcon name='history' color={color} />,
        }}
      />
      <Tabs.Screen
        name='projects'
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <TabBarIcon name='folder-open' color={color} />,
        }}
      />
      <Tabs.Screen
        name='works'
        options={{
          title: 'Works',
          tabBarIcon: ({ color }) => <TabBarIcon name='briefcase' color={color} />,
        }}
      />
      <Tabs.Screen
        name='skillsTools'
        options={{
          title: 'Skills & Tools',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='school' color={color} />,
        }}
      />
    </Tabs>
  )
}
