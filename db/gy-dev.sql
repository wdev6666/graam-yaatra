PGDMP                     
    w            gy-dev    12.0    12.0 @    o           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            p           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            q           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            r           1262    16449    gy-dev    DATABASE     �   CREATE DATABASE "gy-dev" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "gy-dev";
                postgres    false            �            1259    16856    Cities    TABLE     m  CREATE TABLE public."Cities" (
    city_id integer NOT NULL,
    city character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    created_by integer,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by integer,
    deleted_at timestamp with time zone,
    deleted_by integer,
    state_id integer
);
    DROP TABLE public."Cities";
       public         heap    postgres    false            �            1259    16854    Cities_city_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Cities_city_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Cities_city_id_seq";
       public          postgres    false    212            s           0    0    Cities_city_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Cities_city_id_seq" OWNED BY public."Cities".city_id;
          public          postgres    false    211            �            1259    16795 	   Countries    TABLE     �  CREATE TABLE public."Countries" (
    country_id integer NOT NULL,
    country character varying(255),
    isd_code integer,
    flag_icon character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    created_by integer,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by integer,
    deleted_at timestamp with time zone,
    deleted_by integer
);
    DROP TABLE public."Countries";
       public         heap    postgres    false            �            1259    16793    Countries_country_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Countries_country_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."Countries_country_id_seq";
       public          postgres    false    208            t           0    0    Countries_country_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."Countries_country_id_seq" OWNED BY public."Countries".country_id;
          public          postgres    false    207            �            1259    16450    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    16808    States    TABLE     q  CREATE TABLE public."States" (
    state_id integer NOT NULL,
    state character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    created_by integer,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by integer,
    deleted_at timestamp with time zone,
    deleted_by integer,
    country_id integer
);
    DROP TABLE public."States";
       public         heap    postgres    false            �            1259    16806    States_state_id_seq    SEQUENCE     �   CREATE SEQUENCE public."States_state_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."States_state_id_seq";
       public          postgres    false    210            u           0    0    States_state_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."States_state_id_seq" OWNED BY public."States".state_id;
          public          postgres    false    209            �            1259    17194 
   TourOrders    TABLE     �   CREATE TABLE public."TourOrders" (
    tour_id integer NOT NULL,
    tourist_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);
     DROP TABLE public."TourOrders";
       public         heap    postgres    false            �            1259    17185    Tourists    TABLE       CREATE TABLE public."Tourists" (
    tourist_id integer NOT NULL,
    name character varying(255),
    city character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);
    DROP TABLE public."Tourists";
       public         heap    postgres    false            �            1259    17183    Tourists_tourist_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Tourists_tourist_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Tourists_tourist_id_seq";
       public          postgres    false    220            v           0    0    Tourists_tourist_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Tourists_tourist_id_seq" OWNED BY public."Tourists".tourist_id;
          public          postgres    false    219            �            1259    17176    Tours    TABLE     5  CREATE TABLE public."Tours" (
    tour_id integer NOT NULL,
    date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    invoice integer,
    members integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);
    DROP TABLE public."Tours";
       public         heap    postgres    false            �            1259    17174    Tours_tour_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Tours_tour_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Tours_tour_id_seq";
       public          postgres    false    218            w           0    0    Tours_tour_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Tours_tour_id_seq" OWNED BY public."Tours".tour_id;
          public          postgres    false    217            �            1259    16965    Users    TABLE     �  CREATE TABLE public."Users" (
    user_id integer NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    16963    Users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Users_user_id_seq";
       public          postgres    false    216            x           0    0    Users_user_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Users_user_id_seq" OWNED BY public."Users".user_id;
          public          postgres    false    215            �            1259    16934    Vendors    TABLE     �  CREATE TABLE public."Vendors" (
    vendor_id integer NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    email character varying(255),
    phone character varying(255),
    password character varying(255),
    referal_code character varying(255),
    verification_code character varying(255),
    verified_at timestamp with time zone,
    status integer,
    referal_vendor_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    created_by integer,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by integer,
    deleted_at timestamp with time zone,
    deleted_by integer,
    city_id integer NOT NULL
);
    DROP TABLE public."Vendors";
       public         heap    postgres    false            �            1259    16932    Vendors_vendor_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Vendors_vendor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."Vendors_vendor_id_seq";
       public          postgres    false    214            y           0    0    Vendors_vendor_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."Vendors_vendor_id_seq" OWNED BY public."Vendors".vendor_id;
          public          postgres    false    213            �
           2604    16859    Cities city_id    DEFAULT     t   ALTER TABLE ONLY public."Cities" ALTER COLUMN city_id SET DEFAULT nextval('public."Cities_city_id_seq"'::regclass);
 ?   ALTER TABLE public."Cities" ALTER COLUMN city_id DROP DEFAULT;
       public          postgres    false    211    212    212            �
           2604    16798    Countries country_id    DEFAULT     �   ALTER TABLE ONLY public."Countries" ALTER COLUMN country_id SET DEFAULT nextval('public."Countries_country_id_seq"'::regclass);
 E   ALTER TABLE public."Countries" ALTER COLUMN country_id DROP DEFAULT;
       public          postgres    false    208    207    208            �
           2604    16811    States state_id    DEFAULT     v   ALTER TABLE ONLY public."States" ALTER COLUMN state_id SET DEFAULT nextval('public."States_state_id_seq"'::regclass);
 @   ALTER TABLE public."States" ALTER COLUMN state_id DROP DEFAULT;
       public          postgres    false    210    209    210            �
           2604    17188    Tourists tourist_id    DEFAULT     ~   ALTER TABLE ONLY public."Tourists" ALTER COLUMN tourist_id SET DEFAULT nextval('public."Tourists_tourist_id_seq"'::regclass);
 D   ALTER TABLE public."Tourists" ALTER COLUMN tourist_id DROP DEFAULT;
       public          postgres    false    219    220    220            �
           2604    17179    Tours tour_id    DEFAULT     r   ALTER TABLE ONLY public."Tours" ALTER COLUMN tour_id SET DEFAULT nextval('public."Tours_tour_id_seq"'::regclass);
 >   ALTER TABLE public."Tours" ALTER COLUMN tour_id DROP DEFAULT;
       public          postgres    false    218    217    218            �
           2604    16968    Users user_id    DEFAULT     r   ALTER TABLE ONLY public."Users" ALTER COLUMN user_id SET DEFAULT nextval('public."Users_user_id_seq"'::regclass);
 >   ALTER TABLE public."Users" ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    216    215    216            �
           2604    16937    Vendors vendor_id    DEFAULT     z   ALTER TABLE ONLY public."Vendors" ALTER COLUMN vendor_id SET DEFAULT nextval('public."Vendors_vendor_id_seq"'::regclass);
 B   ALTER TABLE public."Vendors" ALTER COLUMN vendor_id DROP DEFAULT;
       public          postgres    false    213    214    214            c          0    16856    Cities 
   TABLE DATA           �   COPY public."Cities" (city_id, city, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, state_id) FROM stdin;
    public          postgres    false    212   [P       _          0    16795 	   Countries 
   TABLE DATA           �   COPY public."Countries" (country_id, country, isd_code, flag_icon, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) FROM stdin;
    public          postgres    false    208   �P       ]          0    16450    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    206   4Q       a          0    16808    States 
   TABLE DATA           �   COPY public."States" (state_id, state, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, country_id) FROM stdin;
    public          postgres    false    210   �R       l          0    17194 
   TourOrders 
   TABLE DATA           b   COPY public."TourOrders" (tour_id, tourist_id, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    221   �R       k          0    17185    Tourists 
   TABLE DATA           c   COPY public."Tourists" (tourist_id, name, city, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    220   �R       i          0    17176    Tours 
   TABLE DATA           i   COPY public."Tours" (tour_id, date, invoice, members, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    218   0S       g          0    16965    Users 
   TABLE DATA           p   COPY public."Users" (user_id, email, name, password, is_active, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    216   tU       e          0    16934    Vendors 
   TABLE DATA           �   COPY public."Vendors" (vendor_id, first_name, last_name, email, phone, password, referal_code, verification_code, verified_at, status, referal_vendor_id, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, city_id) FROM stdin;
    public          postgres    false    214   �U       z           0    0    Cities_city_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Cities_city_id_seq"', 4, true);
          public          postgres    false    211            {           0    0    Countries_country_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."Countries_country_id_seq"', 1, true);
          public          postgres    false    207            |           0    0    States_state_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."States_state_id_seq"', 1, true);
          public          postgres    false    209            }           0    0    Tourists_tourist_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Tourists_tourist_id_seq"', 2, true);
          public          postgres    false    219            ~           0    0    Tours_tour_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Tours_tour_id_seq"', 38, true);
          public          postgres    false    217                       0    0    Users_user_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Users_user_id_seq"', 1, true);
          public          postgres    false    215            �           0    0    Vendors_vendor_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Vendors_vendor_id_seq"', 6, true);
          public          postgres    false    213            �
           2606    16863    Cities Cities_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Cities"
    ADD CONSTRAINT "Cities_pkey" PRIMARY KEY (city_id);
 @   ALTER TABLE ONLY public."Cities" DROP CONSTRAINT "Cities_pkey";
       public            postgres    false    212            �
           2606    16805    Countries Countries_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Countries"
    ADD CONSTRAINT "Countries_pkey" PRIMARY KEY (country_id);
 F   ALTER TABLE ONLY public."Countries" DROP CONSTRAINT "Countries_pkey";
       public            postgres    false    208            �
           2606    16454     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    206            �
           2606    16815    States States_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."States"
    ADD CONSTRAINT "States_pkey" PRIMARY KEY (state_id);
 @   ALTER TABLE ONLY public."States" DROP CONSTRAINT "States_pkey";
       public            postgres    false    210            �
           2606    17198    TourOrders TourOrders_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public."TourOrders"
    ADD CONSTRAINT "TourOrders_pkey" PRIMARY KEY (tour_id, tourist_id);
 H   ALTER TABLE ONLY public."TourOrders" DROP CONSTRAINT "TourOrders_pkey";
       public            postgres    false    221    221            �
           2606    17193    Tourists Tourists_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Tourists"
    ADD CONSTRAINT "Tourists_pkey" PRIMARY KEY (tourist_id);
 D   ALTER TABLE ONLY public."Tourists" DROP CONSTRAINT "Tourists_pkey";
       public            postgres    false    220            �
           2606    17182    Tours Tours_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Tours"
    ADD CONSTRAINT "Tours_pkey" PRIMARY KEY (tour_id);
 >   ALTER TABLE ONLY public."Tours" DROP CONSTRAINT "Tours_pkey";
       public            postgres    false    218            �
           2606    16978    Users Users_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);
 C   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key";
       public            postgres    false    216            �
           2606    16980    Users Users_name_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_name_key" UNIQUE (name);
 B   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_name_key";
       public            postgres    false    216            �
           2606    16976    Users Users_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (user_id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    216            �
           2606    16944    Vendors Vendors_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public."Vendors"
    ADD CONSTRAINT "Vendors_pkey" PRIMARY KEY (vendor_id);
 B   ALTER TABLE ONLY public."Vendors" DROP CONSTRAINT "Vendors_pkey";
       public            postgres    false    214            �
           2606    16864    Cities Cities_state_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Cities"
    ADD CONSTRAINT "Cities_state_id_fkey" FOREIGN KEY (state_id) REFERENCES public."States"(state_id) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public."Cities" DROP CONSTRAINT "Cities_state_id_fkey";
       public          postgres    false    212    2763    210            �
           2606    16816    States States_country_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."States"
    ADD CONSTRAINT "States_country_id_fkey" FOREIGN KEY (country_id) REFERENCES public."Countries"(country_id) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public."States" DROP CONSTRAINT "States_country_id_fkey";
       public          postgres    false    208    210    2761            �
           2606    16945    Vendors Vendors_city_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Vendors"
    ADD CONSTRAINT "Vendors_city_id_fkey" FOREIGN KEY (city_id) REFERENCES public."Cities"(city_id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public."Vendors" DROP CONSTRAINT "Vendors_city_id_fkey";
       public          postgres    false    2765    214    212            c   w   x�3�tO�K���KLO,�420��54�50T04�"3=cmS+c�?
�
 Ȑˈ�1#75%1)1M��������.Ca򆘆�pz� ���P�K=sS<f�`qh� A�7      _   B   x�3���K�L�4����420��54�50T04�25�22�30��60�26������� ��b���� VQ�      ]   D  x����n�@������w�J8�� �Է�7�������z�f��gr�y��:���~��8]��FV.V~��e�9d+0/�=������i�7��e�-cg`��Np�;O��|��:�L٨Ww�������ә�z�_6 `X=0��"� X�hĊ)VL�b�=-+�X1Ō�j�B��ο_�B�����!�c�-��:cΈ������<�� '��&�8ճ+���b���2M���iW��=��G��y��u��>/A�^�,�W�O�t�C�Ε�!��C;vG�.������� {�=j^�𽍮�[�ÏK�4���X-      a   ?   x�3�t/�J,J,�420��54�50T04�25�2�г42�60�26���á�� ��b���� g|       l      x������ � �      k   ,   x�3��K,J-��t��MMILJL�� .#N��Dl21z\\\ 	�*      i   4  x����m$1E��(�>0!nڂp�?���U-b�:Ѐ�0���)�����ڟ���,���)�~���8�Bkm/������A���Pz�!� N�'l�^A�	}R��q:	��e`���'m'���}
{J�6u	-� ��@J.�Ρ��;0�ź)�Z��Z 5������%�� �D�GW�&´%���tE��V�X��X�M���Z�7��q����Z�$+���E]�b�kmV�@=>�:�0-��)*ݜċz)0m��I�ܼŦފ�ڶ��������[�t��NjPZ�ugAI�yR�l5yw��YJ��k����O�"�j�&�
�J4��T�[$��5��[�߼ŋW������/z�
�']I�mk�h�".��V����	�[��5���6���}����ܼn*�Q�=�E�m��<�j\���N�-V���>�]B�mY��n�q���끜v�n0\�&���L��R��%Lb�/�f*'��55��b�ġN;N�]g��0���C�v�4�6���\#��*i�mb_������r�l�d�p��~S�����:⼨      g   U   x�3��K,J-�pH�M���K����(�'B%��9K8�-uu�Lͭ��M���-�L����ZAec��b���� �!      e   [   x�3��K,J-���/N����s3s���s9���*dr��� #CK]CC]CC#++c=#3mS+c�
,
 Ȑ+F��� �"-     