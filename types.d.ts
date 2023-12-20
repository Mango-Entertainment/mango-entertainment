export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      data: {
        Row: {
          category: string | null
          id: string
          isBookmarked: boolean | null
          isTrending: boolean | null
          rating: string | null
          thumbnail: Json | null
          title: string | null
          year: number | null
        }
        Insert: {
          category?: string | null
          id?: string
          isBookmarked?: boolean | null
          isTrending?: boolean | null
          rating?: string | null
          thumbnail?: Json | null
          title?: string | null
          year?: number | null
        }
        Update: {
          category?: string | null
          id?: string
          isBookmarked?: boolean | null
          isTrending?: boolean | null
          rating?: string | null
          thumbnail?: Json | null
          title?: string | null
          year?: number | null
        }
        Relationships: []
      }
      regularThumbs: {
        Row: {
          id: string
          large: string | null
          medium: string | null
          selectionId: string | null
          small: string | null
        }
        Insert: {
          id: string
          large?: string | null
          medium?: string | null
          selectionId?: string | null
          small?: string | null
        }
        Update: {
          id?: string
          large?: string | null
          medium?: string | null
          selectionId?: string | null
          small?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'regularThumbs_selectionId_fkey'
            columns: ['selectionId']
            isOneToOne: false
            referencedRelation: 'selections'
            referencedColumns: ['id']
          },
        ]
      }
      selections: {
        Row: {
          category: string | null
          id: string
          isBookmarked: boolean | null
          isTrending: boolean | null
          rating: string | null
          title: string | null
          year: number | null
        }
        Insert: {
          category?: string | null
          id: string
          isBookmarked?: boolean | null
          isTrending?: boolean | null
          rating?: string | null
          title?: string | null
          year?: number | null
        }
        Update: {
          category?: string | null
          id?: string
          isBookmarked?: boolean | null
          isTrending?: boolean | null
          rating?: string | null
          title?: string | null
          year?: number | null
        }
        Relationships: []
      }
      trendingThumbs: {
        Row: {
          id: string
          large: string | null
          selectionId: string | null
          small: string | null
        }
        Insert: {
          id: string
          large?: string | null
          selectionId?: string | null
          small?: string | null
        }
        Update: {
          id?: string
          large?: string | null
          selectionId?: string | null
          small?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'trendingThumbs_selectionId_fkey'
            columns: ['selectionId']
            isOneToOne: false
            referencedRelation: 'selections'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never
