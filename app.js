const languages = {
  en: { flag: "🇺🇸", name: "English" },
  es: { flag: "🇪🇸", name: "Español" },
  it: { flag: "🇮🇹", name: "Italiano" },
  fr: { flag: "🇫🇷", name: "Français" },
  zh: { flag: "🇨🇳", name: "中文" },
  ru: { flag: "🇷🇺", name: "Русский" },
  ar: { flag: "🇸🇦", name: "العربية" },
  hi: { flag: "🇮🇳", name: "हिन्दी" },
  pt: { flag: "🇧🇷", name: "Português (Brasil)" },
  de: { flag: "🇩🇪", name: "Deutsch" },
  tr: { flag: "🇹🇷", name: "Türkçe" },
  id: { flag: "🇮🇩", name: "Bahasa Indonesia" },
  vi: { flag: "🇻🇳", name: "Tiếng Việt" },
  ja: { flag: "🇯🇵", name: "日本語" }
};

const translations = {
  es: {
    navFeatures:"Funciones",navCompatibility:"Compatibilidad",navPricing:"Planes",navFaq:"Preguntas",navInstall:"Instalar",
    heroEyebrow:"Creado para Telegram Web A y K",heroText:"Descarga videos e imagenes desde chats y galerias multimedia, con progreso visible y control total.",heroCta:"Añadir a Chrome",heroSecondary:"Ver como funciona",
    proofPrivate:"Sin acceso a tu contraseña",proofSimple:"Descarga directa",proofLanguages:"14 idiomas",
    productEyebrow:"El contenido que ves. Listo para guardar.",productTitle:"Una experiencia integrada, no una ventana aparte",productText:"Encina coloca controles precisos dentro de Telegram y mantiene el progreso sincronizado entre el chat, Media y su gestor de descargas.",
    showcaseTitle:"Todo el flujo en un mismo lugar",showcaseText:"Detecta el tipo de archivo, muestra el avance en tiempo real y recuerda lo que ya descargaste.",showcaseOne:"Botones sobre videos e imagenes reales",showcaseTwo:"Descarga desde el chat y la pestaña Media",showcaseThree:"Pausa, reanuda o detiene descargas",
    managerEyebrow:"Tu biblioteca, organizada",managerTitle:"Controla cada descarga desde un solo panel",managerText:"Encina reúne los archivos detectados en un gestor visual. Revisa miniaturas, duración, tamaño y progreso antes de decidir qué guardar.",managerPointOne:"Videos e imágenes en pestañas separadas",managerPointTwo:"Selección individual o múltiple",managerPointThree:"Progreso independiente para cada archivo",managerPointFour:"Actualización sin interrumpir descargas activas",managerName:"Gestor de descargas Encina",managerFound:"6 videos encontrados",managerPreview:"Vista gratuita",managerUpgrade:"Mejorar plan",managerVideos:"Videos",managerImages:"Imágenes",managerRefresh:"Actualizar",managerSelected:"Descargar seleccionados",managerClear:"Limpiar",managerListFound:"6 videos encontrados",managerFileOne:"video: ruta-alpina-01",managerFileTwo:"video: ciudad-nocturna-02",managerFileThree:"video: luces-del-norte-03",managerFileFour:"video: costa-aérea-04",managerDownload:"Descargar",managerCompleted:"VIDEO · Descarga completada",managerSaved:"Guardado",
    featuresEyebrow:"Mas que descargar",featuresTitle:"Herramientas para quienes realmente usan Telegram",featureMediaTitle:"Media completa",featureMediaText:"Descarga desde el chat o cada miniatura de la galeria multimedia.",featureProgressTitle:"Progreso sincronizado",featureProgressText:"El porcentaje acompaña al archivo incluso cuando cambias de vista.",featureBatchTitle:"Gestor por lotes",featureBatchText:"Selecciona varios elementos, revisa sus caratulas y controla cada descarga.",featureDetectTitle:"Deteccion inteligente",featureDetectText:"Distingue imagenes y videos para aplicar el metodo correcto a cada archivo.",featureControlTitle:"Control real",featureControlText:"Pausa, continua o detiene una descarga sin perder el control de la sesion.",featureMemoryTitle:"Memoria de descargas",featureMemoryText:"Identifica archivos completados para evitar descargas repetidas.",
    settingsLabel:"CONFIGURACION",settingsLanguage:"Idioma",settingsSpanish:"Español",settingsDownloadControl:"Control de descargas",settingsPause:"Pausar todo",settingsResume:"Continuar todo",settingsStop:"Detener todo",settingsSmallMedia:"Mostrar media pequeña",settingsSmallMediaHelp:"Añade botones incluso en iconos, reacciones e imágenes pequeñas.",settingsLock:"Bloquear botones descargados",settingsLockHelp:"Evita descargar por accidente un archivo que ya fue guardado.",settingsEyebrow:"Se adapta a cada usuario",settingsTitle:"Preferencias claras, aplicadas al instante",settingsText:"El panel permite decidir cómo debe comportarse Encina sin recargar Telegram. Cada opción tiene un propósito sencillo y puede cambiarse cuando sea necesario.",settingsExplainSmallTitle:"Más alcance cuando lo necesitas",settingsExplainSmallText:"Activa los botones sobre elementos muy pequeños. Desactívalo para mantener una vista más limpia y limitar Encina al contenido principal.",settingsExplainLockTitle:"Protección contra duplicados",settingsExplainLockText:"Después de una descarga exitosa, Encina puede bloquear ese botón y marcar el archivo como guardado. Si prefieres repetir descargas, puedes dejarlo habilitado.",
    compatibilityEyebrow:"Dos versiones. Una sola extension.",compatibilityTitle:"Diseñada especificamente para Telegram A y K",compatibilityText:"Cada version tiene su propio sistema de deteccion optimizado. Encina se adapta sin mezclar sus comportamientos.",tableFeature:"Funcion",tableChat:"Descarga en chats",tableMedia:"Descarga en Media",tableProgress:"Progreso visible",tableManager:"Gestor por lotes",
    pricingEyebrow:"Empieza sin compromiso",pricingTitle:"Pruebala gratis. Mejora cuando la necesites.",pricingText:"La infraestructura de suscripcion se conectara antes del lanzamiento publico.",freeName:"Gratis",forever:"para siempre",freeDescription:"Para probar todo el flujo de Encina.",freeDownloads:"5 descargas cada 24 horas",freeVersions:"Telegram A y K",freeTools:"Gestor y progreso visibles",freeCta:"Probar gratis",popular:"Mas elegido",priceSoon:"Proximamente",premiumDescription:"Para usuarios que descargan contenido con frecuencia.",premiumUnlimited:"Descargas sin limite diario",premiumPriority:"Mejor rendimiento disponible",premiumSupport:"Soporte prioritario",premiumCta:"Unirme a la lista",
    faqEyebrow:"Respuestas claras",faqTitle:"Preguntas frecuentes",faqOneQ:"¿Funciona con la aplicacion de escritorio?",faqOneA:"Encina funciona sobre Telegram Web A y K dentro de Chrome. No controla la aplicacion nativa.",faqTwoQ:"¿Puede entrar a canales privados?",faqTwoA:"Solo trabaja con contenido que tu cuenta ya puede ver dentro de Telegram Web.",faqThreeQ:"¿Que tipos de contenido descarga?",faqThreeA:"Videos, imagenes y otros archivos visibles compatibles, tanto en chats como en Media.",faqFourQ:"¿Encina pertenece a Telegram?",faqFourA:"No. Es una herramienta independiente y no esta afiliada ni respaldada por Telegram.",
    closingTitle:"Tu contenido de Telegram, bajo tu control.",closingText:"Prueba Encina y descubre una forma mas completa de guardar lo que necesitas.",closingCta:"Empezar gratis",footerDisclaimer:"Herramienta independiente para Telegram Web. No afiliada a Telegram.",footerPrivacy:"Privacidad",footerTerms:"Terminos",footerSupport:"Soporte"
  },
  en: {
    navFeatures:"Features",navCompatibility:"Compatibility",navPricing:"Plans",navFaq:"FAQ",navInstall:"Install",
    heroEyebrow:"Built for Telegram Web A and K",heroText:"Download videos and images from chats and media galleries with visible progress and complete control.",heroCta:"Add to Chrome",heroSecondary:"See how it works",
    proofPrivate:"No access to your password",proofSimple:"Direct download",proofLanguages:"14 languages",
    productEyebrow:"What you can see. Ready to save.",productTitle:"An integrated experience, not another window",productText:"Encina adds precise controls inside Telegram and keeps progress synchronized across chat, Media and its download manager.",
    showcaseTitle:"The whole workflow in one place",showcaseText:"Detects file types, shows real-time progress and remembers what you already downloaded.",showcaseOne:"Buttons on actual videos and images",showcaseTwo:"Download from chat and the Media tab",showcaseThree:"Pause, resume or stop downloads",
    managerEyebrow:"Your library, organized",managerTitle:"Control every download from one panel",managerText:"Encina gathers detected files in a visual manager. Review thumbnails, duration, size and progress before deciding what to save.",managerPointOne:"Videos and images in separate tabs",managerPointTwo:"Individual or multiple selection",managerPointThree:"Independent progress for every file",managerPointFour:"Refresh without interrupting active downloads",managerName:"Encina Download Manager",managerFound:"6 videos found",managerPreview:"Free preview",managerUpgrade:"Upgrade",managerVideos:"Videos",managerImages:"Images",managerRefresh:"Refresh",managerSelected:"Download selected",managerClear:"Clear",managerListFound:"6 videos found",managerFileOne:"video: alpine-route-01",managerFileTwo:"video: night-city-02",managerFileThree:"video: northern-lights-03",managerFileFour:"video: aerial-coast-04",managerDownload:"Download",managerCompleted:"VIDEO · Download complete",managerSaved:"Saved",
    featuresEyebrow:"More than downloading",featuresTitle:"Tools for people who really use Telegram",featureMediaTitle:"Complete Media support",featureMediaText:"Download from chat or every thumbnail in the media gallery.",featureProgressTitle:"Synchronized progress",featureProgressText:"Progress follows the file even when you change views.",featureBatchTitle:"Batch manager",featureBatchText:"Select multiple items, inspect thumbnails and control every download.",featureDetectTitle:"Smart detection",featureDetectText:"Distinguishes images and videos to use the right method for each file.",featureControlTitle:"Real control",featureControlText:"Pause, resume or stop a download without losing session control.",featureMemoryTitle:"Download memory",featureMemoryText:"Identifies completed files to prevent repeated downloads.",
    settingsLabel:"SETTINGS",settingsLanguage:"Language",settingsSpanish:"English",settingsDownloadControl:"Download control",settingsPause:"Pause all",settingsResume:"Resume all",settingsStop:"Stop all",settingsSmallMedia:"Show small media",settingsSmallMediaHelp:"Adds buttons even to icons, reactions and small images.",settingsLock:"Lock downloaded buttons",settingsLockHelp:"Prevents accidentally downloading a file that was already saved.",settingsEyebrow:"Adapts to every user",settingsTitle:"Clear preferences, applied instantly",settingsText:"The panel lets you decide how Senna should behave without reloading Telegram. Every option has a simple purpose and can be changed whenever needed.",settingsExplainSmallTitle:"More reach when you need it",settingsExplainSmallText:"Enable buttons on very small elements. Turn it off for a cleaner view focused on primary content.",settingsExplainLockTitle:"Duplicate protection",settingsExplainLockText:"After a successful download, Senna can lock the button and mark the file as saved. Leave it unlocked when repeated downloads are preferred.",
    compatibilityEyebrow:"Two versions. One extension.",compatibilityTitle:"Purpose-built for Telegram A and K",compatibilityText:"Each version has its own optimized detection system. Senna adapts without mixing their behavior.",tableFeature:"Feature",tableChat:"Chat downloads",tableMedia:"Media downloads",tableProgress:"Visible progress",tableManager:"Batch manager",
    pricingEyebrow:"Start with no commitment",pricingTitle:"Try it free. Upgrade when you need it.",pricingText:"Subscription infrastructure will be connected before public launch.",freeName:"Free",forever:"forever",freeDescription:"To experience Senna's complete workflow.",freeDownloads:"5 downloads every 24 hours",freeVersions:"Telegram A and K",freeTools:"Manager and visible progress",freeCta:"Try for free",popular:"Most popular",priceSoon:"Coming soon",premiumDescription:"For people who download content frequently.",premiumUnlimited:"No daily download limit",premiumPriority:"Best available performance",premiumSupport:"Priority support",premiumCta:"Join the list",
    faqEyebrow:"Clear answers",faqTitle:"Frequently asked questions",faqOneQ:"Does it work with the desktop app?",faqOneA:"Senna works on Telegram Web A and K inside Chrome. It does not control the native app.",faqTwoQ:"Can it access private channels?",faqTwoA:"It only works with content your account can already view in Telegram Web.",faqThreeQ:"What content can it download?",faqThreeA:"Videos, images and other compatible visible files from chats and Media.",faqFourQ:"Is Senna part of Telegram?",faqFourA:"No. It is an independent tool and is not affiliated with or endorsed by Telegram.",
    closingTitle:"Your Telegram content, under your control.",closingText:"Try Senna and discover a more complete way to save what you need.",closingCta:"Start free",footerDisclaimer:"Independent tool for Telegram Web. Not affiliated with Telegram.",footerPrivacy:"Privacy",footerTerms:"Terms",footerSupport:"Support"
  }
};

Object.assign(translations, {
  pt: {
    navFeatures:"Recursos",navCompatibility:"Compatibilidade",navPricing:"Planos",navFaq:"Perguntas",navInstall:"Instalar",
    heroEyebrow:"Criado para Telegram Web A e K",heroText:"Baixe vídeos e imagens de conversas e galerias de mídia com progresso visível e controle total.",heroCta:"Adicionar ao Chrome",heroSecondary:"Veja como funciona",
    proofPrivate:"Sem acesso à sua senha",proofSimple:"Download direto",proofLanguages:"14 idiomas",
    productEyebrow:"O conteúdo que você vê. Pronto para salvar.",productTitle:"Uma experiência integrada, não outra janela",productText:"Encina adiciona controles precisos ao Telegram e sincroniza o progresso entre a conversa, Media e o gerenciador de downloads.",
    showcaseTitle:"Todo o fluxo em um só lugar",showcaseText:"Detecta o tipo de arquivo, mostra o progresso em tempo real e lembra o que já foi baixado.",showcaseOne:"Botões em vídeos e imagens",showcaseTwo:"Download pela conversa e pela aba Media",showcaseThree:"Pause, continue ou interrompa downloads",
    managerEyebrow:"Sua biblioteca, organizada",managerTitle:"Controle cada download em um único painel",managerText:"Encina reúne os arquivos detectados em um gerenciador visual. Confira miniaturas, duração, tamanho e progresso antes de salvar.",managerPointOne:"Vídeos e imagens em abas separadas",managerPointTwo:"Seleção individual ou múltipla",managerPointThree:"Progresso independente para cada arquivo",managerPointFour:"Atualização sem interromper downloads ativos",managerName:"Gerenciador de downloads Encina",managerFound:"6 vídeos encontrados",managerPreview:"Vista gratuita",managerUpgrade:"Melhorar plano",managerVideos:"Vídeos",managerImages:"Imagens",managerRefresh:"Atualizar",managerSelected:"Baixar selecionados",managerClear:"Limpar",managerListFound:"6 vídeos encontrados",managerFileOne:"vídeo: rota-alpina-01",managerFileTwo:"vídeo: cidade-noturna-02",managerFileThree:"vídeo: luzes-do-norte-03",managerFileFour:"vídeo: costa-aérea-04",managerDownload:"Baixar",managerCompleted:"VÍDEO · Download concluído",managerSaved:"Salvo",
    featuresEyebrow:"Mais do que baixar",featuresTitle:"Ferramentas para quem realmente usa Telegram",featureMediaTitle:"Suporte completo à Media",featureMediaText:"Baixe pela conversa ou por cada miniatura da galeria.",featureProgressTitle:"Progresso sincronizado",featureProgressText:"A porcentagem acompanha o arquivo mesmo ao mudar de tela.",featureBatchTitle:"Gerenciador em lote",featureBatchText:"Selecione vários itens, confira miniaturas e controle cada download.",featureDetectTitle:"Detecção inteligente",featureDetectText:"Distingue imagens e vídeos para usar o método correto.",featureControlTitle:"Controle real",featureControlText:"Pause, continue ou interrompa sem perder a sessão.",featureMemoryTitle:"Memória de downloads",featureMemoryText:"Reconhece arquivos concluídos para evitar repetições.",
    settingsLabel:"CONFIGURAÇÕES",settingsLanguage:"Idioma",settingsSpanish:"Português (Brasil)",settingsDownloadControl:"Controle de downloads",settingsPause:"Pausar tudo",settingsResume:"Continuar tudo",settingsStop:"Parar tudo",settingsSmallMedia:"Mostrar mídia pequena",settingsSmallMediaHelp:"Adiciona botões até em ícones, reações e imagens pequenas.",settingsLock:"Bloquear botões baixados",settingsLockHelp:"Evita baixar por engano um arquivo já salvo.",settingsEyebrow:"Adapta-se a cada usuário",settingsTitle:"Preferências claras, aplicadas na hora",settingsText:"O painel permite definir como Encina deve funcionar sem recarregar o Telegram.",settingsExplainSmallTitle:"Mais alcance quando necessário",settingsExplainSmallText:"Ative botões em elementos pequenos ou desative para manter uma visualização mais limpa.",settingsExplainLockTitle:"Proteção contra duplicados",settingsExplainLockText:"Após um download concluído, Encina pode bloquear o botão e marcar o arquivo como salvo.",
    compatibilityEyebrow:"Duas versões. Uma extensão.",compatibilityTitle:"Criado especialmente para Telegram A e K",compatibilityText:"Cada versão possui seu próprio sistema de detecção otimizado.",tableFeature:"Recurso",tableChat:"Downloads em conversas",tableMedia:"Downloads em Media",tableProgress:"Progresso visível",tableManager:"Gerenciador em lote",
    pricingEyebrow:"Comece sem compromisso",pricingTitle:"Experimente grátis. Melhore quando precisar.",pricingText:"A infraestrutura de assinatura será conectada antes do lançamento público.",freeName:"Grátis",forever:"para sempre",freeDescription:"Para experimentar todo o fluxo de Encina.",freeDownloads:"5 downloads a cada 24 horas",freeVersions:"Telegram A e K",freeTools:"Gerenciador e progresso visíveis",freeCta:"Experimentar grátis",popular:"Mais escolhido",priceSoon:"Em breve",premiumDescription:"Para quem baixa conteúdo com frequência.",premiumUnlimited:"Sem limite diário",premiumPriority:"Melhor desempenho disponível",premiumSupport:"Suporte prioritário",premiumCta:"Entrar na lista",
    faqEyebrow:"Respostas claras",faqTitle:"Perguntas frequentes",faqOneQ:"Funciona com o aplicativo para computador?",faqOneA:"Encina funciona no Telegram Web A e K dentro do Chrome. Não controla o aplicativo nativo.",faqTwoQ:"Pode acessar canais privados?",faqTwoA:"Funciona somente com conteúdo que sua conta já pode visualizar.",faqThreeQ:"Que conteúdo pode baixar?",faqThreeA:"Vídeos, imagens e outros arquivos visíveis compatíveis em conversas e Media.",faqFourQ:"Encina faz parte do Telegram?",faqFourA:"Não. É uma ferramenta independente e não é afiliada ao Telegram.",closingTitle:"Seu conteúdo do Telegram, sob seu controle.",closingText:"Experimente Encina e descubra uma forma mais completa de salvar o que precisa.",closingCta:"Começar grátis",footerDisclaimer:"Ferramenta independente para Telegram Web. Não afiliada ao Telegram.",footerPrivacy:"Privacidade",footerTerms:"Termos",footerSupport:"Suporte"
  },
  de: {
    navFeatures:"Funktionen",navCompatibility:"Kompatibilität",navPricing:"Tarife",navFaq:"FAQ",navInstall:"Installieren",
    heroEyebrow:"Für Telegram Web A und K entwickelt",heroText:"Laden Sie Videos und Bilder aus Chats und Mediengalerien mit sichtbarem Fortschritt und voller Kontrolle herunter.",heroCta:"Zu Chrome hinzufügen",heroSecondary:"So funktioniert es",proofPrivate:"Kein Zugriff auf Ihr Passwort",proofSimple:"Direkter Download",proofLanguages:"14 Sprachen",
    productEyebrow:"Was Sie sehen. Bereit zum Speichern.",productTitle:"Eine integrierte Erfahrung statt eines weiteren Fensters",productText:"Encina fügt Telegram präzise Steuerelemente hinzu und synchronisiert den Fortschritt zwischen Chat, Media und Download-Manager.",showcaseTitle:"Der gesamte Ablauf an einem Ort",showcaseText:"Erkennt Dateitypen, zeigt den Fortschritt in Echtzeit und merkt sich abgeschlossene Downloads.",showcaseOne:"Schaltflächen auf Videos und Bildern",showcaseTwo:"Downloads aus Chat und Media",showcaseThree:"Downloads pausieren, fortsetzen oder stoppen",
    managerEyebrow:"Ihre Bibliothek, organisiert",managerTitle:"Jeden Download in einem Panel steuern",managerText:"Encina sammelt erkannte Dateien in einem visuellen Manager. Prüfen Sie Vorschau, Dauer, Größe und Fortschritt.",managerPointOne:"Videos und Bilder in getrennten Tabs",managerPointTwo:"Einzel- oder Mehrfachauswahl",managerPointThree:"Eigener Fortschritt für jede Datei",managerPointFour:"Aktualisieren ohne laufende Downloads zu unterbrechen",managerName:"Encina Download-Manager",managerFound:"6 Videos gefunden",managerPreview:"Kostenlose Ansicht",managerUpgrade:"Tarif verbessern",managerVideos:"Videos",managerImages:"Bilder",managerRefresh:"Aktualisieren",managerSelected:"Auswahl laden",managerClear:"Leeren",managerListFound:"6 Videos gefunden",managerFileOne:"video: alpenroute-01",managerFileTwo:"video: nachtstadt-02",managerFileThree:"video: nordlichter-03",managerFileFour:"video: luftküste-04",managerDownload:"Laden",managerCompleted:"VIDEO · Download abgeschlossen",managerSaved:"Gespeichert",
    featuresEyebrow:"Mehr als Downloads",featuresTitle:"Werkzeuge für aktive Telegram-Nutzer",featureMediaTitle:"Vollständige Media-Unterstützung",featureMediaText:"Aus dem Chat oder jeder Vorschau der Galerie laden.",featureProgressTitle:"Synchroner Fortschritt",featureProgressText:"Der Prozentsatz bleibt auch beim Ansichtswechsel bei der Datei.",featureBatchTitle:"Stapelmanager",featureBatchText:"Mehrere Elemente auswählen, Vorschauen prüfen und Downloads steuern.",featureDetectTitle:"Intelligente Erkennung",featureDetectText:"Unterscheidet Bilder und Videos und nutzt die richtige Methode.",featureControlTitle:"Echte Kontrolle",featureControlText:"Pausieren, fortsetzen oder stoppen, ohne die Sitzung zu verlieren.",featureMemoryTitle:"Download-Verlauf",featureMemoryText:"Erkennt abgeschlossene Dateien und verhindert Wiederholungen.",
    settingsLabel:"EINSTELLUNGEN",settingsLanguage:"Sprache",settingsSpanish:"Deutsch",settingsDownloadControl:"Downloadsteuerung",settingsPause:"Alle pausieren",settingsResume:"Alle fortsetzen",settingsStop:"Alle stoppen",settingsSmallMedia:"Kleine Medien anzeigen",settingsSmallMediaHelp:"Zeigt Schaltflächen auch auf Symbolen, Reaktionen und kleinen Bildern.",settingsLock:"Geladene Schaltflächen sperren",settingsLockHelp:"Verhindert versehentliche doppelte Downloads.",settingsEyebrow:"Passt sich jedem Nutzer an",settingsTitle:"Klare Einstellungen, sofort angewendet",settingsText:"Im Panel legen Sie fest, wie Encina arbeitet, ohne Telegram neu zu laden.",settingsExplainSmallTitle:"Mehr Reichweite bei Bedarf",settingsExplainSmallText:"Aktivieren Sie Schaltflächen auf kleinen Elementen oder deaktivieren Sie sie für eine ruhigere Ansicht.",settingsExplainLockTitle:"Schutz vor Duplikaten",settingsExplainLockText:"Encina kann die Schaltfläche nach erfolgreichem Download sperren und die Datei als gespeichert markieren.",
    compatibilityEyebrow:"Zwei Versionen. Eine Erweiterung.",compatibilityTitle:"Speziell für Telegram A und K",compatibilityText:"Jede Version besitzt ein eigenes optimiertes Erkennungssystem.",tableFeature:"Funktion",tableChat:"Chat-Downloads",tableMedia:"Media-Downloads",tableProgress:"Sichtbarer Fortschritt",tableManager:"Stapelmanager",
    pricingEyebrow:"Ohne Verpflichtung starten",pricingTitle:"Kostenlos testen. Bei Bedarf upgraden.",pricingText:"Die Abonnement-Infrastruktur wird vor dem öffentlichen Start verbunden.",freeName:"Kostenlos",forever:"für immer",freeDescription:"Um den gesamten Encina-Ablauf zu testen.",freeDownloads:"5 Downloads alle 24 Stunden",freeVersions:"Telegram A und K",freeTools:"Manager und sichtbarer Fortschritt",freeCta:"Kostenlos testen",popular:"Beliebteste Wahl",priceSoon:"Demnächst",premiumDescription:"Für häufige Downloads.",premiumUnlimited:"Kein Tageslimit",premiumPriority:"Beste verfügbare Leistung",premiumSupport:"Bevorzugter Support",premiumCta:"Zur Liste",
    faqEyebrow:"Klare Antworten",faqTitle:"Häufige Fragen",faqOneQ:"Funktioniert es mit der Desktop-App?",faqOneA:"Encina funktioniert in Chrome mit Telegram Web A und K und steuert nicht die native App.",faqTwoQ:"Kann es private Kanäle öffnen?",faqTwoA:"Es arbeitet nur mit Inhalten, die Ihr Konto bereits sehen kann.",faqThreeQ:"Welche Inhalte werden unterstützt?",faqThreeA:"Sichtbare kompatible Videos, Bilder und Dateien aus Chats und Media.",faqFourQ:"Gehört Encina zu Telegram?",faqFourA:"Nein. Es ist ein unabhängiges, nicht mit Telegram verbundenes Werkzeug.",closingTitle:"Ihre Telegram-Inhalte unter Ihrer Kontrolle.",closingText:"Testen Sie Encina und speichern Sie Inhalte vollständiger.",closingCta:"Kostenlos starten",footerDisclaimer:"Unabhängiges Werkzeug für Telegram Web. Nicht mit Telegram verbunden.",footerPrivacy:"Datenschutz",footerTerms:"Bedingungen",footerSupport:"Support"
  },
  tr: {
    navFeatures:"Özellikler",navCompatibility:"Uyumluluk",navPricing:"Planlar",navFaq:"Sorular",navInstall:"Yükle",heroEyebrow:"Telegram Web A ve K için geliştirildi",heroText:"Sohbet ve medya galerilerindeki video ve görselleri görünür ilerleme ve tam kontrolle indirin.",heroCta:"Chrome'a ekle",heroSecondary:"Nasıl çalışır",proofPrivate:"Parolanıza erişmez",proofSimple:"Doğrudan indirme",proofLanguages:"14 dil",
    productEyebrow:"Gördüğünüz içerik. Kaydetmeye hazır.",productTitle:"Başka bir pencere değil, bütünleşik deneyim",productText:"Encina Telegram içine hassas kontroller ekler ve sohbet, Media ve indirme yöneticisi arasında ilerlemeyi eşitler.",showcaseTitle:"Tüm süreç tek yerde",showcaseText:"Dosya türünü algılar, gerçek zamanlı ilerleme gösterir ve indirilenleri hatırlar.",showcaseOne:"Video ve görseller üzerinde düğmeler",showcaseTwo:"Sohbetten ve Media sekmesinden indirme",showcaseThree:"İndirmeleri duraklatın, sürdürün veya durdurun",
    managerEyebrow:"Kitaplığınız düzenli",managerTitle:"Her indirmeyi tek panelden yönetin",managerText:"Encina algılanan dosyaları görsel bir yöneticide toplar. Küçük resim, süre, boyut ve ilerlemeyi inceleyin.",managerPointOne:"Video ve görseller ayrı sekmelerde",managerPointTwo:"Tekli veya çoklu seçim",managerPointThree:"Her dosya için ayrı ilerleme",managerPointFour:"Aktif indirmeleri kesmeden yenileme",managerName:"Encina İndirme Yöneticisi",managerFound:"6 video bulundu",managerPreview:"Ücretsiz görünüm",managerUpgrade:"Planı yükselt",managerVideos:"Videolar",managerImages:"Görseller",managerRefresh:"Yenile",managerSelected:"Seçilenleri indir",managerClear:"Temizle",managerListFound:"6 video bulundu",managerFileOne:"video: alp-rotası-01",managerFileTwo:"video: gece-şehri-02",managerFileThree:"video: kuzey-ışıkları-03",managerFileFour:"video: hava-sahili-04",managerDownload:"İndir",managerCompleted:"VİDEO · İndirme tamamlandı",managerSaved:"Kaydedildi",
    featuresEyebrow:"İndirmeden fazlası",featuresTitle:"Telegram'ı gerçekten kullananlar için araçlar",featureMediaTitle:"Tam Media desteği",featureMediaText:"Sohbetten veya galerideki her küçük resimden indirin.",featureProgressTitle:"Eşitlenmiş ilerleme",featureProgressText:"Görünüm değişse bile yüzde dosyayı takip eder.",featureBatchTitle:"Toplu yönetici",featureBatchText:"Birden fazla öğe seçin ve her indirmeyi yönetin.",featureDetectTitle:"Akıllı algılama",featureDetectText:"Görsel ve videoları ayırıp doğru yöntemi kullanır.",featureControlTitle:"Gerçek kontrol",featureControlText:"Oturumu kaybetmeden duraklatın, sürdürün veya durdurun.",featureMemoryTitle:"İndirme hafızası",featureMemoryText:"Tamamlanan dosyaları tanır ve tekrarları önler.",
    settingsLabel:"AYARLAR",settingsLanguage:"Dil",settingsSpanish:"Türkçe",settingsDownloadControl:"İndirme kontrolü",settingsPause:"Tümünü duraklat",settingsResume:"Tümünü sürdür",settingsStop:"Tümünü durdur",settingsSmallMedia:"Küçük medyayı göster",settingsSmallMediaHelp:"Simge, tepki ve küçük görsellere de düğme ekler.",settingsLock:"İndirilen düğmeleri kilitle",settingsLockHelp:"Kaydedilen dosyanın yanlışlıkla tekrar indirilmesini önler.",settingsEyebrow:"Her kullanıcıya uyum sağlar",settingsTitle:"Açık tercihler, anında uygulanır",settingsText:"Panel, Telegram'ı yenilemeden Encina'nın davranışını belirlemenizi sağlar.",settingsExplainSmallTitle:"Gerektiğinde daha geniş erişim",settingsExplainSmallText:"Küçük öğelerdeki düğmeleri açın veya daha temiz görünüm için kapatın.",settingsExplainLockTitle:"Tekrar koruması",settingsExplainLockText:"Encina başarılı indirmeden sonra düğmeyi kilitleyip dosyayı kaydedildi olarak işaretleyebilir.",
    compatibilityEyebrow:"İki sürüm. Tek uzantı.",compatibilityTitle:"Telegram A ve K için özel geliştirildi",compatibilityText:"Her sürümün kendine ait optimize algılama sistemi vardır.",tableFeature:"Özellik",tableChat:"Sohbet indirmeleri",tableMedia:"Media indirmeleri",tableProgress:"Görünür ilerleme",tableManager:"Toplu yönetici",
    pricingEyebrow:"Taahhütsüz başlayın",pricingTitle:"Ücretsiz deneyin. Gerektiğinde yükseltin.",pricingText:"Abonelik altyapısı herkese açık sürümden önce bağlanacaktır.",freeName:"Ücretsiz",forever:"süresiz",freeDescription:"Encina'nın tüm akışını denemek için.",freeDownloads:"Her 24 saatte 5 indirme",freeVersions:"Telegram A ve K",freeTools:"Görünür yönetici ve ilerleme",freeCta:"Ücretsiz dene",popular:"En çok seçilen",priceSoon:"Yakında",premiumDescription:"Sık içerik indirenler için.",premiumUnlimited:"Günlük sınır yok",premiumPriority:"En iyi kullanılabilir performans",premiumSupport:"Öncelikli destek",premiumCta:"Listeye katıl",
    faqEyebrow:"Açık yanıtlar",faqTitle:"Sık sorulan sorular",faqOneQ:"Masaüstü uygulamasıyla çalışır mı?",faqOneA:"Encina Chrome içindeki Telegram Web A ve K ile çalışır. Yerel uygulamayı kontrol etmez.",faqTwoQ:"Özel kanallara erişebilir mi?",faqTwoA:"Yalnızca hesabınızın zaten görebildiği içerikle çalışır.",faqThreeQ:"Hangi içerikleri indirir?",faqThreeA:"Sohbet ve Media içindeki görünür uyumlu video, görsel ve dosyalar.",faqFourQ:"Encina Telegram'ın parçası mı?",faqFourA:"Hayır. Telegram ile bağlantısı olmayan bağımsız bir araçtır.",closingTitle:"Telegram içeriğiniz sizin kontrolünüzde.",closingText:"Encina'yı deneyin ve ihtiyacınızı daha eksiksiz kaydedin.",closingCta:"Ücretsiz başla",footerDisclaimer:"Telegram Web için bağımsız araç. Telegram ile bağlantılı değildir.",footerPrivacy:"Gizlilik",footerTerms:"Koşullar",footerSupport:"Destek"
  },
  id: {
    navFeatures:"Fitur",navCompatibility:"Kompatibilitas",navPricing:"Paket",navFaq:"Pertanyaan",navInstall:"Pasang",heroEyebrow:"Dibuat untuk Telegram Web A dan K",heroText:"Unduh video dan gambar dari percakapan dan galeri media dengan progres terlihat dan kontrol penuh.",heroCta:"Tambahkan ke Chrome",heroSecondary:"Lihat cara kerjanya",proofPrivate:"Tanpa akses ke kata sandi",proofSimple:"Unduhan langsung",proofLanguages:"14 bahasa",
    productEyebrow:"Konten yang Anda lihat. Siap disimpan.",productTitle:"Pengalaman terintegrasi, bukan jendela tambahan",productText:"Encina menambahkan kontrol tepat di Telegram dan menyinkronkan progres antara percakapan, Media, dan pengelola unduhan.",showcaseTitle:"Seluruh alur di satu tempat",showcaseText:"Mengenali jenis berkas, menampilkan progres langsung, dan mengingat unduhan selesai.",showcaseOne:"Tombol pada video dan gambar",showcaseTwo:"Unduh dari percakapan dan tab Media",showcaseThree:"Jeda, lanjutkan, atau hentikan unduhan",
    managerEyebrow:"Pustaka Anda, tertata",managerTitle:"Kontrol setiap unduhan dari satu panel",managerText:"Encina mengumpulkan berkas yang terdeteksi dalam pengelola visual. Periksa gambar mini, durasi, ukuran, dan progres.",managerPointOne:"Video dan gambar dalam tab terpisah",managerPointTwo:"Pilihan tunggal atau banyak",managerPointThree:"Progres terpisah untuk setiap berkas",managerPointFour:"Segarkan tanpa menghentikan unduhan aktif",managerName:"Pengelola Unduhan Encina",managerFound:"6 video ditemukan",managerPreview:"Pratinjau gratis",managerUpgrade:"Tingkatkan paket",managerVideos:"Video",managerImages:"Gambar",managerRefresh:"Segarkan",managerSelected:"Unduh pilihan",managerClear:"Bersihkan",managerListFound:"6 video ditemukan",managerFileOne:"video: rute-alpen-01",managerFileTwo:"video: kota-malam-02",managerFileThree:"video: cahaya-utara-03",managerFileFour:"video: pantai-udara-04",managerDownload:"Unduh",managerCompleted:"VIDEO · Unduhan selesai",managerSaved:"Tersimpan",
    featuresEyebrow:"Lebih dari mengunduh",featuresTitle:"Alat untuk pengguna Telegram yang aktif",featureMediaTitle:"Dukungan Media lengkap",featureMediaText:"Unduh dari percakapan atau setiap gambar mini galeri.",featureProgressTitle:"Progres tersinkron",featureProgressText:"Persentase tetap mengikuti berkas saat tampilan berubah.",featureBatchTitle:"Pengelola massal",featureBatchText:"Pilih beberapa item dan kontrol setiap unduhan.",featureDetectTitle:"Deteksi pintar",featureDetectText:"Membedakan gambar dan video untuk memakai metode yang tepat.",featureControlTitle:"Kontrol nyata",featureControlText:"Jeda, lanjutkan, atau hentikan tanpa kehilangan sesi.",featureMemoryTitle:"Riwayat unduhan",featureMemoryText:"Mengenali berkas selesai untuk mencegah pengulangan.",
    settingsLabel:"PENGATURAN",settingsLanguage:"Bahasa",settingsSpanish:"Bahasa Indonesia",settingsDownloadControl:"Kontrol unduhan",settingsPause:"Jeda semua",settingsResume:"Lanjutkan semua",settingsStop:"Hentikan semua",settingsSmallMedia:"Tampilkan media kecil",settingsSmallMediaHelp:"Menambahkan tombol pada ikon, reaksi, dan gambar kecil.",settingsLock:"Kunci tombol yang diunduh",settingsLockHelp:"Mencegah berkas tersimpan diunduh ulang tanpa sengaja.",settingsEyebrow:"Menyesuaikan setiap pengguna",settingsTitle:"Preferensi jelas, langsung diterapkan",settingsText:"Panel menentukan perilaku Encina tanpa memuat ulang Telegram.",settingsExplainSmallTitle:"Jangkauan lebih luas saat dibutuhkan",settingsExplainSmallText:"Aktifkan tombol pada elemen kecil atau nonaktifkan untuk tampilan lebih bersih.",settingsExplainLockTitle:"Perlindungan duplikat",settingsExplainLockText:"Encina dapat mengunci tombol setelah unduhan berhasil dan menandai berkas sebagai tersimpan.",
    compatibilityEyebrow:"Dua versi. Satu ekstensi.",compatibilityTitle:"Dibuat khusus untuk Telegram A dan K",compatibilityText:"Setiap versi memiliki sistem deteksi yang dioptimalkan sendiri.",tableFeature:"Fitur",tableChat:"Unduhan percakapan",tableMedia:"Unduhan Media",tableProgress:"Progres terlihat",tableManager:"Pengelola massal",
    pricingEyebrow:"Mulai tanpa komitmen",pricingTitle:"Coba gratis. Tingkatkan saat perlu.",pricingText:"Infrastruktur langganan akan dihubungkan sebelum peluncuran publik.",freeName:"Gratis",forever:"selamanya",freeDescription:"Untuk mencoba seluruh alur Encina.",freeDownloads:"5 unduhan setiap 24 jam",freeVersions:"Telegram A dan K",freeTools:"Pengelola dan progres terlihat",freeCta:"Coba gratis",popular:"Paling populer",priceSoon:"Segera hadir",premiumDescription:"Untuk pengguna yang sering mengunduh.",premiumUnlimited:"Tanpa batas harian",premiumPriority:"Performa terbaik tersedia",premiumSupport:"Dukungan prioritas",premiumCta:"Gabung daftar",
    faqEyebrow:"Jawaban jelas",faqTitle:"Pertanyaan umum",faqOneQ:"Apakah bekerja dengan aplikasi desktop?",faqOneA:"Encina bekerja pada Telegram Web A dan K di Chrome, bukan aplikasi asli.",faqTwoQ:"Bisakah mengakses kanal pribadi?",faqTwoA:"Hanya bekerja dengan konten yang sudah dapat dilihat akun Anda.",faqThreeQ:"Konten apa yang dapat diunduh?",faqThreeA:"Video, gambar, dan berkas kompatibel yang terlihat dalam percakapan dan Media.",faqFourQ:"Apakah Encina bagian dari Telegram?",faqFourA:"Tidak. Ini alat independen yang tidak berafiliasi dengan Telegram.",closingTitle:"Konten Telegram Anda, dalam kendali Anda.",closingText:"Coba Encina untuk menyimpan kebutuhan Anda dengan lebih lengkap.",closingCta:"Mulai gratis",footerDisclaimer:"Alat independen untuk Telegram Web. Tidak berafiliasi dengan Telegram.",footerPrivacy:"Privasi",footerTerms:"Ketentuan",footerSupport:"Dukungan"
  },
  vi: {
    navFeatures:"Tính năng",navCompatibility:"Tương thích",navPricing:"Gói",navFaq:"Câu hỏi",navInstall:"Cài đặt",heroEyebrow:"Được tạo cho Telegram Web A và K",heroText:"Tải video và hình ảnh từ cuộc trò chuyện và thư viện media với tiến trình hiển thị và toàn quyền kiểm soát.",heroCta:"Thêm vào Chrome",heroSecondary:"Xem cách hoạt động",proofPrivate:"Không truy cập mật khẩu",proofSimple:"Tải trực tiếp",proofLanguages:"14 ngôn ngữ",
    productEyebrow:"Nội dung bạn thấy. Sẵn sàng lưu.",productTitle:"Trải nghiệm tích hợp, không phải cửa sổ khác",productText:"Encina thêm điều khiển trực tiếp vào Telegram và đồng bộ tiến trình giữa trò chuyện, Media và trình quản lý tải.",showcaseTitle:"Toàn bộ quy trình ở một nơi",showcaseText:"Nhận diện loại tệp, hiển thị tiến trình theo thời gian thực và ghi nhớ nội dung đã tải.",showcaseOne:"Nút trên video và hình ảnh",showcaseTwo:"Tải từ trò chuyện và tab Media",showcaseThree:"Tạm dừng, tiếp tục hoặc dừng tải",
    managerEyebrow:"Thư viện được sắp xếp",managerTitle:"Kiểm soát mọi lượt tải trong một bảng",managerText:"Encina tập hợp tệp đã phát hiện trong trình quản lý trực quan. Xem ảnh nhỏ, thời lượng, dung lượng và tiến trình.",managerPointOne:"Video và hình ảnh ở tab riêng",managerPointTwo:"Chọn một hoặc nhiều mục",managerPointThree:"Tiến trình riêng cho từng tệp",managerPointFour:"Làm mới mà không ngắt lượt tải đang chạy",managerName:"Trình quản lý tải xuống Encina",managerFound:"Đã tìm thấy 6 video",managerPreview:"Bản xem miễn phí",managerUpgrade:"Nâng cấp",managerVideos:"Video",managerImages:"Hình ảnh",managerRefresh:"Làm mới",managerSelected:"Tải mục đã chọn",managerClear:"Xóa",managerListFound:"Đã tìm thấy 6 video",managerFileOne:"video: tuyến-núi-01",managerFileTwo:"video: thành-phố-đêm-02",managerFileThree:"video: cực-quang-03",managerFileFour:"video: bờ-biển-trên-không-04",managerDownload:"Tải xuống",managerCompleted:"VIDEO · Đã tải xong",managerSaved:"Đã lưu",
    featuresEyebrow:"Không chỉ tải xuống",featuresTitle:"Công cụ cho người thực sự dùng Telegram",featureMediaTitle:"Hỗ trợ Media đầy đủ",featureMediaText:"Tải từ cuộc trò chuyện hoặc từng ảnh nhỏ trong thư viện.",featureProgressTitle:"Tiến trình đồng bộ",featureProgressText:"Phần trăm vẫn theo tệp khi chuyển màn hình.",featureBatchTitle:"Quản lý hàng loạt",featureBatchText:"Chọn nhiều mục và kiểm soát từng lượt tải.",featureDetectTitle:"Nhận diện thông minh",featureDetectText:"Phân biệt hình ảnh và video để dùng đúng phương thức.",featureControlTitle:"Kiểm soát thực sự",featureControlText:"Tạm dừng, tiếp tục hoặc dừng mà không mất phiên.",featureMemoryTitle:"Bộ nhớ tải xuống",featureMemoryText:"Nhận diện tệp đã hoàn tất để tránh tải lặp.",
    settingsLabel:"CÀI ĐẶT",settingsLanguage:"Ngôn ngữ",settingsSpanish:"Tiếng Việt",settingsDownloadControl:"Điều khiển tải xuống",settingsPause:"Tạm dừng tất cả",settingsResume:"Tiếp tục tất cả",settingsStop:"Dừng tất cả",settingsSmallMedia:"Hiển thị media nhỏ",settingsSmallMediaHelp:"Thêm nút trên biểu tượng, phản ứng và hình ảnh nhỏ.",settingsLock:"Khóa nút đã tải",settingsLockHelp:"Ngăn vô tình tải lại tệp đã lưu.",settingsEyebrow:"Phù hợp với từng người dùng",settingsTitle:"Tùy chọn rõ ràng, áp dụng tức thì",settingsText:"Bảng cho phép xác định cách Encina hoạt động mà không cần tải lại Telegram.",settingsExplainSmallTitle:"Phạm vi rộng hơn khi cần",settingsExplainSmallText:"Bật nút trên phần tử nhỏ hoặc tắt để giữ giao diện gọn hơn.",settingsExplainLockTitle:"Bảo vệ khỏi trùng lặp",settingsExplainLockText:"Encina có thể khóa nút sau khi tải thành công và đánh dấu tệp đã lưu.",
    compatibilityEyebrow:"Hai phiên bản. Một tiện ích.",compatibilityTitle:"Được thiết kế riêng cho Telegram A và K",compatibilityText:"Mỗi phiên bản có hệ thống nhận diện tối ưu riêng.",tableFeature:"Tính năng",tableChat:"Tải trong trò chuyện",tableMedia:"Tải trong Media",tableProgress:"Tiến trình hiển thị",tableManager:"Quản lý hàng loạt",
    pricingEyebrow:"Bắt đầu không ràng buộc",pricingTitle:"Dùng thử miễn phí. Nâng cấp khi cần.",pricingText:"Hệ thống đăng ký sẽ được kết nối trước khi phát hành công khai.",freeName:"Miễn phí",forever:"mãi mãi",freeDescription:"Để trải nghiệm toàn bộ Encina.",freeDownloads:"5 lượt tải mỗi 24 giờ",freeVersions:"Telegram A và K",freeTools:"Trình quản lý và tiến trình hiển thị",freeCta:"Dùng thử miễn phí",popular:"Được chọn nhiều nhất",priceSoon:"Sắp ra mắt",premiumDescription:"Dành cho người thường xuyên tải nội dung.",premiumUnlimited:"Không giới hạn mỗi ngày",premiumPriority:"Hiệu suất tốt nhất",premiumSupport:"Hỗ trợ ưu tiên",premiumCta:"Tham gia danh sách",
    faqEyebrow:"Câu trả lời rõ ràng",faqTitle:"Câu hỏi thường gặp",faqOneQ:"Có hoạt động với ứng dụng máy tính không?",faqOneA:"Encina hoạt động trên Telegram Web A và K trong Chrome, không điều khiển ứng dụng gốc.",faqTwoQ:"Có thể truy cập kênh riêng tư không?",faqTwoA:"Chỉ hoạt động với nội dung tài khoản của bạn đã xem được.",faqThreeQ:"Có thể tải nội dung nào?",faqThreeA:"Video, hình ảnh và tệp tương thích hiển thị trong trò chuyện và Media.",faqFourQ:"Encina có thuộc Telegram không?",faqFourA:"Không. Đây là công cụ độc lập, không liên kết với Telegram.",closingTitle:"Nội dung Telegram trong tầm kiểm soát của bạn.",closingText:"Dùng thử Encina để lưu nội dung theo cách đầy đủ hơn.",closingCta:"Bắt đầu miễn phí",footerDisclaimer:"Công cụ độc lập cho Telegram Web. Không liên kết với Telegram.",footerPrivacy:"Quyền riêng tư",footerTerms:"Điều khoản",footerSupport:"Hỗ trợ"
  },
  ja: {
    navFeatures:"機能",navCompatibility:"互換性",navPricing:"プラン",navFaq:"よくある質問",navInstall:"インストール",heroEyebrow:"Telegram Web A / K 専用",heroText:"チャットやメディアギャラリーの動画と画像を、進捗表示と完全な制御付きでダウンロードできます。",heroCta:"Chrome に追加",heroSecondary:"使い方を見る",proofPrivate:"パスワードへアクセスしません",proofSimple:"直接ダウンロード",proofLanguages:"14言語",
    productEyebrow:"見えているコンテンツを保存。",productTitle:"別ウィンドウではなく統合された体験",productText:"Encina は Telegram 内に操作を追加し、チャット、Media、ダウンロードマネージャーの進捗を同期します。",showcaseTitle:"すべての操作を一か所で",showcaseText:"ファイル種類を判定し、進捗をリアルタイム表示して、完了済みを記憶します。",showcaseOne:"動画と画像に直接ボタンを表示",showcaseTwo:"チャットと Media タブからダウンロード",showcaseThree:"一時停止、再開、停止に対応",
    managerEyebrow:"ライブラリを整理",managerTitle:"すべてのダウンロードを一つのパネルで管理",managerText:"Encina は検出したファイルを視覚的な管理画面に集約します。サムネイル、時間、サイズ、進捗を確認できます。",managerPointOne:"動画と画像を別タブで表示",managerPointTwo:"個別選択と複数選択",managerPointThree:"ファイルごとの進捗",managerPointFour:"実行中のダウンロードを止めずに更新",managerName:"Encina ダウンロードマネージャー",managerFound:"6件の動画",managerPreview:"無料プレビュー",managerUpgrade:"アップグレード",managerVideos:"動画",managerImages:"画像",managerRefresh:"更新",managerSelected:"選択項目をダウンロード",managerClear:"クリア",managerListFound:"6件の動画",managerFileOne:"動画: アルプスルート-01",managerFileTwo:"動画: 夜の都市-02",managerFileThree:"動画: オーロラ-03",managerFileFour:"動画: 空からの海岸-04",managerDownload:"ダウンロード",managerCompleted:"動画 · ダウンロード完了",managerSaved:"保存済み",
    featuresEyebrow:"ダウンロード以上の機能",featuresTitle:"Telegram を活用する人のためのツール",featureMediaTitle:"Media を完全サポート",featureMediaText:"チャットまたはギャラリーの各サムネイルから保存できます。",featureProgressTitle:"進捗を同期",featureProgressText:"表示を切り替えても進捗率は同じファイルを追跡します。",featureBatchTitle:"一括管理",featureBatchText:"複数項目を選択し、それぞれのダウンロードを管理します。",featureDetectTitle:"スマート判定",featureDetectText:"画像と動画を区別して適切な方法を使用します。",featureControlTitle:"確かな制御",featureControlText:"セッションを維持したまま一時停止、再開、停止できます。",featureMemoryTitle:"ダウンロード履歴",featureMemoryText:"完了済みファイルを認識して重複を防ぎます。",
    settingsLabel:"設定",settingsLanguage:"言語",settingsSpanish:"日本語",settingsDownloadControl:"ダウンロード制御",settingsPause:"すべて一時停止",settingsResume:"すべて再開",settingsStop:"すべて停止",settingsSmallMedia:"小さいメディアを表示",settingsSmallMediaHelp:"アイコン、リアクション、小さい画像にもボタンを追加します。",settingsLock:"完了済みボタンをロック",settingsLockHelp:"保存済みファイルの誤ダウンロードを防ぎます。",settingsEyebrow:"ユーザーごとに調整",settingsTitle:"明確な設定をすぐに適用",settingsText:"Telegram を再読み込みせずに Encina の動作を変更できます。",settingsExplainSmallTitle:"必要なときだけ対象を拡大",settingsExplainSmallText:"小さい要素のボタンを有効化し、すっきり表示したい場合は無効化できます。",settingsExplainLockTitle:"重複ダウンロードを防止",settingsExplainLockText:"完了後にボタンをロックし、ファイルを保存済みとして表示できます。",
    compatibilityEyebrow:"2つのバージョン、1つの拡張機能。",compatibilityTitle:"Telegram A と K 専用設計",compatibilityText:"各バージョンに最適化された独立の検出システムがあります。",tableFeature:"機能",tableChat:"チャットから保存",tableMedia:"Media から保存",tableProgress:"進捗表示",tableManager:"一括管理",
    pricingEyebrow:"気軽に始める",pricingTitle:"無料で試して、必要なときにアップグレード。",pricingText:"公開前にサブスクリプション基盤を接続します。",freeName:"無料",forever:"ずっと",freeDescription:"Encina の全機能を体験できます。",freeDownloads:"24時間ごとに5件",freeVersions:"Telegram A と K",freeTools:"管理画面と進捗表示",freeCta:"無料で試す",popular:"人気",priceSoon:"近日公開",premiumDescription:"頻繁にコンテンツを保存する方向け。",premiumUnlimited:"1日の上限なし",premiumPriority:"利用可能な最高性能",premiumSupport:"優先サポート",premiumCta:"リストに参加",
    faqEyebrow:"明確な回答",faqTitle:"よくある質問",faqOneQ:"デスクトップアプリで使えますか？",faqOneA:"Encina は Chrome 内の Telegram Web A / K で動作し、ネイティブアプリは操作しません。",faqTwoQ:"非公開チャンネルへアクセスできますか？",faqTwoA:"アカウントですでに閲覧できるコンテンツだけを扱います。",faqThreeQ:"何をダウンロードできますか？",faqThreeA:"チャットと Media に表示される対応動画、画像、その他のファイルです。",faqFourQ:"Encina は Telegram の製品ですか？",faqFourA:"いいえ。Telegram と提携または承認関係のない独立したツールです。",closingTitle:"Telegram のコンテンツを自分で管理。",closingText:"Encina で必要なコンテンツをより便利に保存しましょう。",closingCta:"無料で始める",footerDisclaimer:"Telegram Web 用の独立ツール。Telegram とは提携していません。",footerPrivacy:"プライバシー",footerTerms:"利用規約",footerSupport:"サポート"
  }
});

Object.assign(translations, {
  zh: {
    navFeatures:"功能",navCompatibility:"兼容性",navPricing:"方案",navFaq:"常见问题",navInstall:"安装",
    heroEyebrow:"专为 Telegram Web A 和 K 打造",heroText:"从聊天和媒体图库下载视频与图片，实时查看进度并完全掌控。",heroCta:"添加到 Chrome",heroSecondary:"查看使用方式",
    proofPrivate:"不会访问您的密码",proofSimple:"直接下载",proofLanguages:"支持 14 种语言",
    productEyebrow:"看到的内容，随时保存。",productTitle:"真正集成的体验，而非额外窗口",productText:"Encina 在 Telegram 内添加精准控件，并在聊天、Media 和下载管理器之间同步进度。",
    showcaseTitle:"所有流程集中一处",showcaseText:"识别文件类型、实时显示进度，并记住已经下载的内容。",showcaseOne:"直接在视频和图片上显示按钮",showcaseTwo:"从聊天和 Media 标签下载",showcaseThree:"暂停、继续或停止下载",
    managerEyebrow:"媒体库井然有序",managerTitle:"在一个面板中管理每项下载",managerText:"Encina 将检测到的文件集中到可视化管理器中。保存前可查看缩略图、时长、大小和进度。",managerPointOne:"视频和图片分开显示",managerPointTwo:"支持单选和多选",managerPointThree:"每个文件独立显示进度",managerPointFour:"刷新时不中断正在进行的下载",managerName:"Encina 下载管理器",managerFound:"找到 6 个视频",managerPreview:"免费预览",managerUpgrade:"升级方案",managerVideos:"视频",managerImages:"图片",managerRefresh:"刷新",managerSelected:"下载所选",managerClear:"清除",managerListFound:"找到 6 个视频",managerFileOne:"视频：高山路线-01",managerFileTwo:"视频：夜间城市-02",managerFileThree:"视频：北极光-03",managerFileFour:"视频：空中海岸-04",managerDownload:"下载",managerCompleted:"视频 · 下载完成",managerSaved:"已保存",
    featuresEyebrow:"不只是下载",featuresTitle:"为真正使用 Telegram 的用户打造",featureMediaTitle:"完整支持 Media",featureMediaText:"可从聊天或媒体图库中的每个缩略图下载。",featureProgressTitle:"同步下载进度",featureProgressText:"切换视图后，百分比仍会跟随对应文件。",featureBatchTitle:"批量管理器",featureBatchText:"选择多个项目、检查缩略图并分别控制下载。",featureDetectTitle:"智能识别",featureDetectText:"区分图片和视频，为每种文件使用正确方法。",featureControlTitle:"完整控制",featureControlText:"暂停、继续或停止下载，同时保留会话状态。",featureMemoryTitle:"下载记录",featureMemoryText:"识别已完成文件，避免重复下载。",
    settingsLabel:"设置",settingsLanguage:"语言",settingsSpanish:"中文",settingsDownloadControl:"下载控制",settingsPause:"全部暂停",settingsResume:"全部继续",settingsStop:"全部停止",settingsSmallMedia:"显示小型媒体",settingsSmallMediaHelp:"在图标、表情反应和小图片上也显示按钮。",settingsLock:"锁定已下载按钮",settingsLockHelp:"防止意外重复下载已经保存的文件。",settingsEyebrow:"适合每位用户",settingsTitle:"清晰设置，即时生效",settingsText:"无需重新加载 Telegram，即可通过面板决定 Encina 的工作方式。",settingsExplainSmallTitle:"需要时扩大识别范围",settingsExplainSmallText:"启用小型元素上的按钮；关闭后界面更整洁，只处理主要内容。",settingsExplainLockTitle:"防止重复下载",settingsExplainLockText:"下载成功后，Encina 可以锁定按钮并将文件标记为已保存。",
    compatibilityEyebrow:"两个版本，一个扩展。",compatibilityTitle:"专门适配 Telegram A 和 K",compatibilityText:"每个版本都有独立优化的识别系统，Encina 会自动适配而不会混淆行为。",tableFeature:"功能",tableChat:"聊天下载",tableMedia:"Media 下载",tableProgress:"显示进度",tableManager:"批量管理器",
    pricingEyebrow:"无需承诺即可开始",pricingTitle:"免费试用，需要时再升级。",pricingText:"订阅基础设施将在公开发布前接入。",freeName:"免费",forever:"永久",freeDescription:"体验 Encina 的完整流程。",freeDownloads:"每 24 小时 5 次下载",freeVersions:"Telegram A 和 K",freeTools:"可见的管理器和进度",freeCta:"免费试用",popular:"最受欢迎",priceSoon:"即将推出",premiumDescription:"适合经常下载内容的用户。",premiumUnlimited:"无每日下载限制",premiumPriority:"最佳可用性能",premiumSupport:"优先支持",premiumCta:"加入名单",
    faqEyebrow:"清晰解答",faqTitle:"常见问题",faqOneQ:"支持桌面应用吗？",faqOneA:"Encina 适用于 Chrome 中的 Telegram Web A 和 K，不控制原生应用。",faqTwoQ:"可以访问私人频道吗？",faqTwoA:"它只处理您的账户已经可以在 Telegram Web 中查看的内容。",faqThreeQ:"可以下载哪些内容？",faqThreeA:"聊天和 Media 中可见且兼容的视频、图片及其他文件。",faqFourQ:"Encina 属于 Telegram 吗？",faqFourA:"不属于。它是独立工具，与 Telegram 无关联，也未获得其认可。",
    closingTitle:"您的 Telegram 内容，由您掌控。",closingText:"试用 Encina，以更完整的方式保存所需内容。",closingCta:"免费开始",footerDisclaimer:"适用于 Telegram Web 的独立工具，与 Telegram 无关联。",footerPrivacy:"隐私",footerTerms:"条款",footerSupport:"支持"
  }
});

Object.assign(translations, {
  it: {
    navFeatures:"Funzioni",navCompatibility:"Compatibilità",navPricing:"Piani",navFaq:"Domande",navInstall:"Installa",heroEyebrow:"Creato per Telegram Web A e K",heroText:"Scarica video e immagini da chat e gallerie multimediali con avanzamento visibile e controllo completo.",heroCta:"Aggiungi a Chrome",heroSecondary:"Scopri come funziona",proofPrivate:"Nessun accesso alla password",proofSimple:"Download diretto",proofLanguages:"14 lingue",
    productEyebrow:"Quello che vedi. Pronto da salvare.",productTitle:"Un'esperienza integrata, non un'altra finestra",productText:"Encina aggiunge controlli precisi in Telegram e sincronizza l'avanzamento tra chat, Media e gestore dei download.",showcaseTitle:"L'intero flusso in un unico posto",showcaseText:"Rileva il tipo di file, mostra l'avanzamento in tempo reale e ricorda ciò che hai già scaricato.",showcaseOne:"Pulsanti su video e immagini",showcaseTwo:"Download dalla chat e dalla scheda Media",showcaseThree:"Metti in pausa, riprendi o interrompi",
    managerEyebrow:"La tua raccolta, organizzata",managerTitle:"Controlla ogni download da un solo pannello",managerText:"Encina raccoglie i file rilevati in un gestore visuale. Controlla anteprima, durata, dimensione e avanzamento.",managerPointOne:"Video e immagini in schede separate",managerPointTwo:"Selezione singola o multipla",managerPointThree:"Avanzamento indipendente per ogni file",managerPointFour:"Aggiornamento senza interrompere i download",managerName:"Gestore download Encina",managerFound:"6 video trovati",managerPreview:"Anteprima gratuita",managerUpgrade:"Migliora piano",managerVideos:"Video",managerImages:"Immagini",managerRefresh:"Aggiorna",managerSelected:"Scarica selezionati",managerClear:"Pulisci",managerListFound:"6 video trovati",managerFileOne:"video: percorso-alpino-01",managerFileTwo:"video: città-notturna-02",managerFileThree:"video: aurora-boreale-03",managerFileFour:"video: costa-aerea-04",managerDownload:"Scarica",managerCompleted:"VIDEO · Download completato",managerSaved:"Salvato",
    featuresEyebrow:"Più di un download",featuresTitle:"Strumenti per chi usa davvero Telegram",featureMediaTitle:"Supporto Media completo",featureMediaText:"Scarica dalla chat o da ogni miniatura della galleria.",featureProgressTitle:"Avanzamento sincronizzato",featureProgressText:"La percentuale segue il file anche cambiando vista.",featureBatchTitle:"Gestore multiplo",featureBatchText:"Seleziona più elementi e controlla ogni download.",featureDetectTitle:"Rilevamento intelligente",featureDetectText:"Distingue immagini e video e applica il metodo corretto.",featureControlTitle:"Controllo reale",featureControlText:"Metti in pausa, riprendi o interrompi senza perdere la sessione.",featureMemoryTitle:"Memoria dei download",featureMemoryText:"Riconosce i file completati ed evita duplicati.",
    settingsLabel:"IMPOSTAZIONI",settingsLanguage:"Lingua",settingsSpanish:"Italiano",settingsDownloadControl:"Controllo download",settingsPause:"Pausa tutto",settingsResume:"Riprendi tutto",settingsStop:"Ferma tutto",settingsSmallMedia:"Mostra media piccoli",settingsSmallMediaHelp:"Aggiunge pulsanti anche a icone, reazioni e immagini piccole.",settingsLock:"Blocca pulsanti scaricati",settingsLockHelp:"Evita di scaricare per errore un file già salvato.",settingsEyebrow:"Si adatta a ogni utente",settingsTitle:"Preferenze chiare, applicate subito",settingsText:"Il pannello permette di scegliere come deve funzionare Encina senza ricaricare Telegram.",settingsExplainSmallTitle:"Più copertura quando serve",settingsExplainSmallText:"Attiva i pulsanti sugli elementi piccoli oppure disattivali per una vista più pulita.",settingsExplainLockTitle:"Protezione dai duplicati",settingsExplainLockText:"Dopo un download riuscito, Encina può bloccare il pulsante e segnare il file come salvato.",
    compatibilityEyebrow:"Due versioni. Una sola estensione.",compatibilityTitle:"Progettata per Telegram A e K",compatibilityText:"Ogni versione usa un sistema di rilevamento indipendente e ottimizzato.",tableFeature:"Funzione",tableChat:"Download nelle chat",tableMedia:"Download in Media",tableProgress:"Avanzamento visibile",tableManager:"Gestore multiplo",
    pricingEyebrow:"Inizia senza impegno",pricingTitle:"Provala gratis. Migliora quando serve.",pricingText:"L'infrastruttura degli abbonamenti sarà collegata prima del lancio pubblico.",freeName:"Gratis",forever:"per sempre",freeDescription:"Per provare l'intero flusso di Encina.",freeDownloads:"5 download ogni 24 ore",freeVersions:"Telegram A e K",freeTools:"Gestore e avanzamento visibili",freeCta:"Prova gratis",popular:"Più scelto",priceSoon:"Prossimamente",premiumDescription:"Per chi scarica contenuti spesso.",premiumUnlimited:"Nessun limite giornaliero",premiumPriority:"Migliori prestazioni disponibili",premiumSupport:"Assistenza prioritaria",premiumCta:"Unisciti alla lista",
    faqEyebrow:"Risposte chiare",faqTitle:"Domande frequenti",faqOneQ:"Funziona con l'applicazione desktop?",faqOneA:"Encina funziona su Telegram Web A e K in Chrome. Non controlla l'app nativa.",faqTwoQ:"Può accedere ai canali privati?",faqTwoA:"Funziona solo con contenuti che il tuo account può già visualizzare.",faqThreeQ:"Quali contenuti può scaricare?",faqThreeA:"Video, immagini e altri file visibili compatibili da chat e Media.",faqFourQ:"Encina appartiene a Telegram?",faqFourA:"No. È uno strumento indipendente e non affiliato a Telegram.",closingTitle:"I tuoi contenuti Telegram, sotto il tuo controllo.",closingText:"Prova Encina e salva ciò che ti serve in modo più completo.",closingCta:"Inizia gratis",footerDisclaimer:"Strumento indipendente per Telegram Web. Non affiliato a Telegram.",footerPrivacy:"Privacy",footerTerms:"Termini",footerSupport:"Assistenza"
  },
  fr: {
    navFeatures:"Fonctions",navCompatibility:"Compatibilité",navPricing:"Offres",navFaq:"Questions",navInstall:"Installer",heroEyebrow:"Conçu pour Telegram Web A et K",heroText:"Téléchargez vidéos et images depuis les chats et galeries avec progression visible et contrôle complet.",heroCta:"Ajouter à Chrome",heroSecondary:"Voir comment ça marche",proofPrivate:"Aucun accès à votre mot de passe",proofSimple:"Téléchargement direct",proofLanguages:"14 langues",
    productEyebrow:"Ce que vous voyez. Prêt à enregistrer.",productTitle:"Une expérience intégrée, pas une fenêtre de plus",productText:"Encina ajoute des commandes précises dans Telegram et synchronise la progression entre le chat, Media et le gestionnaire.",showcaseTitle:"Tout le flux au même endroit",showcaseText:"Détecte les types de fichiers, affiche la progression en temps réel et mémorise les téléchargements.",showcaseOne:"Boutons sur les vidéos et images",showcaseTwo:"Téléchargement depuis le chat et Media",showcaseThree:"Mettre en pause, reprendre ou arrêter",
    managerEyebrow:"Votre bibliothèque, organisée",managerTitle:"Contrôlez chaque téléchargement dans un seul panneau",managerText:"Encina rassemble les fichiers détectés dans un gestionnaire visuel. Vérifiez miniature, durée, taille et progression.",managerPointOne:"Vidéos et images dans des onglets séparés",managerPointTwo:"Sélection simple ou multiple",managerPointThree:"Progression indépendante pour chaque fichier",managerPointFour:"Actualisation sans interrompre les téléchargements",managerName:"Gestionnaire de téléchargements Encina",managerFound:"6 vidéos trouvées",managerPreview:"Aperçu gratuit",managerUpgrade:"Améliorer l'offre",managerVideos:"Vidéos",managerImages:"Images",managerRefresh:"Actualiser",managerSelected:"Télécharger la sélection",managerClear:"Effacer",managerListFound:"6 vidéos trouvées",managerFileOne:"vidéo : route-alpine-01",managerFileTwo:"vidéo : ville-nocturne-02",managerFileThree:"vidéo : aurore-boréale-03",managerFileFour:"vidéo : côte-aérienne-04",managerDownload:"Télécharger",managerCompleted:"VIDÉO · Téléchargement terminé",managerSaved:"Enregistré",
    featuresEyebrow:"Bien plus qu'un téléchargement",featuresTitle:"Des outils pour ceux qui utilisent vraiment Telegram",featureMediaTitle:"Prise en charge complète de Media",featureMediaText:"Téléchargez depuis le chat ou chaque miniature de la galerie.",featureProgressTitle:"Progression synchronisée",featureProgressText:"Le pourcentage suit le fichier même lorsque vous changez de vue.",featureBatchTitle:"Gestionnaire par lots",featureBatchText:"Sélectionnez plusieurs éléments et contrôlez chaque téléchargement.",featureDetectTitle:"Détection intelligente",featureDetectText:"Distingue images et vidéos pour appliquer la bonne méthode.",featureControlTitle:"Contrôle réel",featureControlText:"Mettez en pause, reprenez ou arrêtez sans perdre la session.",featureMemoryTitle:"Mémoire des téléchargements",featureMemoryText:"Identifie les fichiers terminés pour éviter les doublons.",
    settingsLabel:"PARAMÈTRES",settingsLanguage:"Langue",settingsSpanish:"Français",settingsDownloadControl:"Contrôle des téléchargements",settingsPause:"Tout suspendre",settingsResume:"Tout reprendre",settingsStop:"Tout arrêter",settingsSmallMedia:"Afficher les petits médias",settingsSmallMediaHelp:"Ajoute des boutons aux icônes, réactions et petites images.",settingsLock:"Bloquer les boutons téléchargés",settingsLockHelp:"Évite de télécharger par erreur un fichier déjà enregistré.",settingsEyebrow:"S'adapte à chaque utilisateur",settingsTitle:"Des préférences claires, appliquées immédiatement",settingsText:"Le panneau permet de définir le comportement d'Encina sans recharger Telegram.",settingsExplainSmallTitle:"Plus de portée si nécessaire",settingsExplainSmallText:"Activez les boutons sur les petits éléments ou désactivez-les pour une vue plus propre.",settingsExplainLockTitle:"Protection contre les doublons",settingsExplainLockText:"Après un téléchargement réussi, Encina peut bloquer le bouton et marquer le fichier comme enregistré.",
    compatibilityEyebrow:"Deux versions. Une extension.",compatibilityTitle:"Conçue spécialement pour Telegram A et K",compatibilityText:"Chaque version possède son propre système de détection optimisé.",tableFeature:"Fonction",tableChat:"Téléchargements dans les chats",tableMedia:"Téléchargements dans Media",tableProgress:"Progression visible",tableManager:"Gestionnaire par lots",
    pricingEyebrow:"Commencez sans engagement",pricingTitle:"Essayez gratuitement. Évoluez quand nécessaire.",pricingText:"L'infrastructure d'abonnement sera connectée avant le lancement public.",freeName:"Gratuit",forever:"pour toujours",freeDescription:"Pour découvrir tout le fonctionnement d'Encina.",freeDownloads:"5 téléchargements toutes les 24 heures",freeVersions:"Telegram A et K",freeTools:"Gestionnaire et progression visibles",freeCta:"Essayer gratuitement",popular:"Le plus choisi",priceSoon:"Bientôt disponible",premiumDescription:"Pour ceux qui téléchargent régulièrement.",premiumUnlimited:"Aucune limite quotidienne",premiumPriority:"Meilleures performances disponibles",premiumSupport:"Assistance prioritaire",premiumCta:"Rejoindre la liste",
    faqEyebrow:"Des réponses claires",faqTitle:"Questions fréquentes",faqOneQ:"Fonctionne-t-il avec l'application de bureau ?",faqOneA:"Encina fonctionne sur Telegram Web A et K dans Chrome. Il ne contrôle pas l'application native.",faqTwoQ:"Peut-il accéder aux canaux privés ?",faqTwoA:"Il fonctionne uniquement avec le contenu déjà visible par votre compte.",faqThreeQ:"Quels contenus peut-il télécharger ?",faqThreeA:"Vidéos, images et autres fichiers visibles compatibles dans les chats et Media.",faqFourQ:"Encina appartient-il à Telegram ?",faqFourA:"Non. C'est un outil indépendant, non affilié à Telegram.",closingTitle:"Vos contenus Telegram, sous votre contrôle.",closingText:"Essayez Encina et enregistrez plus facilement ce dont vous avez besoin.",closingCta:"Commencer gratuitement",footerDisclaimer:"Outil indépendant pour Telegram Web. Non affilié à Telegram.",footerPrivacy:"Confidentialité",footerTerms:"Conditions",footerSupport:"Assistance"
  },
  ru: {
    navFeatures:"Функции",navCompatibility:"Совместимость",navPricing:"Тарифы",navFaq:"Вопросы",navInstall:"Установить",heroEyebrow:"Создано для Telegram Web A и K",heroText:"Скачивайте видео и изображения из чатов и медиагалерей с видимым прогрессом и полным контролем.",heroCta:"Добавить в Chrome",heroSecondary:"Как это работает",proofPrivate:"Без доступа к вашему паролю",proofSimple:"Прямая загрузка",proofLanguages:"14 языков",
    productEyebrow:"То, что вы видите. Готово к сохранению.",productTitle:"Встроенный интерфейс, а не лишнее окно",productText:"Encina добавляет элементы управления в Telegram и синхронизирует прогресс между чатом, Media и менеджером загрузок.",showcaseTitle:"Весь процесс в одном месте",showcaseText:"Определяет тип файла, показывает прогресс в реальном времени и помнит завершенные загрузки.",showcaseOne:"Кнопки прямо на видео и изображениях",showcaseTwo:"Загрузка из чата и вкладки Media",showcaseThree:"Пауза, продолжение и остановка загрузок",
    managerEyebrow:"Ваша библиотека организована",managerTitle:"Управляйте загрузками в одной панели",managerText:"Encina собирает найденные файлы в визуальном менеджере. Проверяйте миниатюру, длительность, размер и прогресс.",managerPointOne:"Видео и изображения в отдельных вкладках",managerPointTwo:"Одиночный и множественный выбор",managerPointThree:"Отдельный прогресс каждого файла",managerPointFour:"Обновление без остановки активных загрузок",managerName:"Менеджер загрузок Encina",managerFound:"Найдено видео: 6",managerPreview:"Бесплатный режим",managerUpgrade:"Улучшить тариф",managerVideos:"Видео",managerImages:"Изображения",managerRefresh:"Обновить",managerSelected:"Скачать выбранное",managerClear:"Очистить",managerListFound:"Найдено видео: 6",managerFileOne:"видео: альпийский-маршрут-01",managerFileTwo:"видео: ночной-город-02",managerFileThree:"видео: северное-сияние-03",managerFileFour:"видео: побережье-с-воздуха-04",managerDownload:"Скачать",managerCompleted:"ВИДЕО · Загрузка завершена",managerSaved:"Сохранено",
    featuresEyebrow:"Больше, чем загрузка",featuresTitle:"Инструменты для активных пользователей Telegram",featureMediaTitle:"Полная поддержка Media",featureMediaText:"Загрузка из чата или любой миниатюры медиагалереи.",featureProgressTitle:"Синхронный прогресс",featureProgressText:"Процент остается связан с файлом при смене представления.",featureBatchTitle:"Пакетный менеджер",featureBatchText:"Выбирайте несколько элементов и управляйте каждой загрузкой.",featureDetectTitle:"Умное распознавание",featureDetectText:"Различает изображения и видео и применяет нужный способ.",featureControlTitle:"Полный контроль",featureControlText:"Приостанавливайте, продолжайте или останавливайте без потери сеанса.",featureMemoryTitle:"История загрузок",featureMemoryText:"Распознает завершенные файлы и предотвращает повторы.",
    settingsLabel:"НАСТРОЙКИ",settingsLanguage:"Язык",settingsSpanish:"Русский",settingsDownloadControl:"Управление загрузками",settingsPause:"Приостановить все",settingsResume:"Продолжить все",settingsStop:"Остановить все",settingsSmallMedia:"Показывать мелкие медиа",settingsSmallMediaHelp:"Добавляет кнопки к значкам, реакциям и маленьким изображениям.",settingsLock:"Блокировать загруженные кнопки",settingsLockHelp:"Предотвращает случайную повторную загрузку файла.",settingsEyebrow:"Настраивается для каждого пользователя",settingsTitle:"Понятные настройки, мгновенное применение",settingsText:"Панель позволяет изменить работу Encina без перезагрузки Telegram.",settingsExplainSmallTitle:"Больше охвата при необходимости",settingsExplainSmallText:"Включите кнопки на мелких элементах или отключите их для более чистого вида.",settingsExplainLockTitle:"Защита от повторов",settingsExplainLockText:"После успешной загрузки Encina может заблокировать кнопку и отметить файл сохраненным.",
    compatibilityEyebrow:"Две версии. Одно расширение.",compatibilityTitle:"Специально для Telegram A и K",compatibilityText:"Для каждой версии используется собственная оптимизированная система распознавания.",tableFeature:"Функция",tableChat:"Загрузка в чатах",tableMedia:"Загрузка в Media",tableProgress:"Видимый прогресс",tableManager:"Пакетный менеджер",
    pricingEyebrow:"Начните без обязательств",pricingTitle:"Попробуйте бесплатно. Обновитесь при необходимости.",pricingText:"Подписка будет подключена до публичного запуска.",freeName:"Бесплатно",forever:"навсегда",freeDescription:"Для знакомства со всеми возможностями Encina.",freeDownloads:"5 загрузок каждые 24 часа",freeVersions:"Telegram A и K",freeTools:"Менеджер и видимый прогресс",freeCta:"Попробовать бесплатно",popular:"Самый популярный",priceSoon:"Скоро",premiumDescription:"Для частых загрузок.",premiumUnlimited:"Без дневного лимита",premiumPriority:"Максимальная доступная производительность",premiumSupport:"Приоритетная поддержка",premiumCta:"Вступить в список",
    faqEyebrow:"Понятные ответы",faqTitle:"Частые вопросы",faqOneQ:"Работает ли с настольным приложением?",faqOneA:"Encina работает с Telegram Web A и K в Chrome и не управляет нативным приложением.",faqTwoQ:"Может ли получить доступ к закрытым каналам?",faqTwoA:"Расширение работает только с контентом, уже доступным вашей учетной записи.",faqThreeQ:"Какие файлы можно скачивать?",faqThreeA:"Видимые совместимые видео, изображения и другие файлы из чатов и Media.",faqFourQ:"Encina является частью Telegram?",faqFourA:"Нет. Это независимый инструмент, не связанный с Telegram.",closingTitle:"Ваш контент Telegram под вашим контролем.",closingText:"Попробуйте Encina и сохраняйте нужное удобнее.",closingCta:"Начать бесплатно",footerDisclaimer:"Независимый инструмент для Telegram Web. Не связан с Telegram.",footerPrivacy:"Конфиденциальность",footerTerms:"Условия",footerSupport:"Поддержка"
  },
  ar: {
    navFeatures:"المزايا",navCompatibility:"التوافق",navPricing:"الخطط",navFaq:"الأسئلة",navInstall:"تثبيت",heroEyebrow:"مصمم لـ Telegram Web A و K",heroText:"نزّل الفيديوهات والصور من المحادثات ومعرض الوسائط مع تقدم واضح وتحكم كامل.",heroCta:"إضافة إلى Chrome",heroSecondary:"شاهد كيف يعمل",proofPrivate:"لا وصول إلى كلمة مرورك",proofSimple:"تنزيل مباشر",proofLanguages:"14 لغة",
    productEyebrow:"ما تراه جاهز للحفظ.",productTitle:"تجربة مدمجة وليست نافذة إضافية",productText:"يضيف Encina عناصر تحكم داخل Telegram ويحافظ على مزامنة التقدم بين المحادثة وMedia ومدير التنزيل.",showcaseTitle:"سير العمل كله في مكان واحد",showcaseText:"يكتشف نوع الملف ويعرض التقدم لحظيا ويتذكر ما تم تنزيله.",showcaseOne:"أزرار على الفيديوهات والصور",showcaseTwo:"تنزيل من المحادثة وتبويب Media",showcaseThree:"إيقاف مؤقت أو متابعة أو إلغاء التنزيل",
    managerEyebrow:"مكتبتك منظمة",managerTitle:"تحكم في كل تنزيل من لوحة واحدة",managerText:"يجمع Encina الملفات المكتشفة في مدير مرئي. راجع الصورة المصغرة والمدة والحجم والتقدم.",managerPointOne:"الفيديوهات والصور في تبويبات منفصلة",managerPointTwo:"تحديد فردي أو متعدد",managerPointThree:"تقدم مستقل لكل ملف",managerPointFour:"تحديث من دون إيقاف التنزيلات",managerName:"مدير تنزيل Encina",managerFound:"تم العثور على 6 فيديوهات",managerPreview:"معاينة مجانية",managerUpgrade:"ترقية الخطة",managerVideos:"فيديو",managerImages:"صور",managerRefresh:"تحديث",managerSelected:"تنزيل المحدد",managerClear:"مسح",managerListFound:"تم العثور على 6 فيديوهات",managerFileOne:"فيديو: مسار-جبلي-01",managerFileTwo:"فيديو: مدينة-ليلية-02",managerFileThree:"فيديو: الشفق-القطبي-03",managerFileFour:"فيديو: ساحل-جوي-04",managerDownload:"تنزيل",managerCompleted:"فيديو · اكتمل التنزيل",managerSaved:"محفوظ",
    featuresEyebrow:"أكثر من مجرد تنزيل",featuresTitle:"أدوات لمن يستخدم Telegram فعليا",featureMediaTitle:"دعم Media الكامل",featureMediaText:"نزّل من المحادثة أو من كل صورة مصغرة في المعرض.",featureProgressTitle:"تقدم متزامن",featureProgressText:"تبقى النسبة مرتبطة بالملف حتى عند تغيير العرض.",featureBatchTitle:"مدير التنزيل الجماعي",featureBatchText:"حدد عدة عناصر وتحكم بكل تنزيل.",featureDetectTitle:"اكتشاف ذكي",featureDetectText:"يميز الصور عن الفيديوهات ويطبق الطريقة المناسبة.",featureControlTitle:"تحكم حقيقي",featureControlText:"أوقف أو تابع أو ألغ التنزيل من دون فقدان الجلسة.",featureMemoryTitle:"ذاكرة التنزيل",featureMemoryText:"يتعرف على الملفات المكتملة لتجنب التكرار.",
    settingsLabel:"الإعدادات",settingsLanguage:"اللغة",settingsSpanish:"العربية",settingsDownloadControl:"التحكم في التنزيلات",settingsPause:"إيقاف الكل مؤقتا",settingsResume:"متابعة الكل",settingsStop:"إيقاف الكل",settingsSmallMedia:"إظهار الوسائط الصغيرة",settingsSmallMediaHelp:"يضيف أزرارا إلى الأيقونات والتفاعلات والصور الصغيرة.",settingsLock:"قفل أزرار الملفات المحملة",settingsLockHelp:"يمنع تنزيل ملف محفوظ مرة أخرى بالخطأ.",settingsEyebrow:"يتكيف مع كل مستخدم",settingsTitle:"تفضيلات واضحة تطبق فورا",settingsText:"تتيح اللوحة تحديد طريقة عمل Encina من دون إعادة تحميل Telegram.",settingsExplainSmallTitle:"نطاق أوسع عند الحاجة",settingsExplainSmallText:"فعّل الأزرار على العناصر الصغيرة أو عطّلها للحصول على عرض أنظف.",settingsExplainLockTitle:"حماية من التكرار",settingsExplainLockText:"بعد نجاح التنزيل يمكن لـ Encina قفل الزر ووضع علامة محفوظ على الملف.",
    compatibilityEyebrow:"إصداران. إضافة واحدة.",compatibilityTitle:"مصمم خصيصا لـ Telegram A و K",compatibilityText:"لكل إصدار نظام اكتشاف مستقل ومحسن.",tableFeature:"الميزة",tableChat:"تنزيل من المحادثات",tableMedia:"تنزيل من Media",tableProgress:"تقدم ظاهر",tableManager:"مدير جماعي",
    pricingEyebrow:"ابدأ بلا التزام",pricingTitle:"جرّبه مجانا وقم بالترقية عند الحاجة.",pricingText:"سيتم ربط نظام الاشتراك قبل الإطلاق العام.",freeName:"مجاني",forever:"دائما",freeDescription:"لتجربة جميع مزايا Encina.",freeDownloads:"5 تنزيلات كل 24 ساعة",freeVersions:"Telegram A و K",freeTools:"مدير وتقدم مرئيان",freeCta:"جرّب مجانا",popular:"الأكثر اختيارا",priceSoon:"قريبا",premiumDescription:"لمن ينزّل المحتوى باستمرار.",premiumUnlimited:"من دون حد يومي",premiumPriority:"أفضل أداء متاح",premiumSupport:"دعم ذو أولوية",premiumCta:"انضم إلى القائمة",
    faqEyebrow:"إجابات واضحة",faqTitle:"الأسئلة الشائعة",faqOneQ:"هل يعمل مع تطبيق سطح المكتب؟",faqOneA:"يعمل Encina على Telegram Web A و K داخل Chrome ولا يتحكم بالتطبيق الأصلي.",faqTwoQ:"هل يمكنه دخول القنوات الخاصة؟",faqTwoA:"يعمل فقط مع المحتوى الذي يستطيع حسابك رؤيته بالفعل.",faqThreeQ:"ما أنواع المحتوى التي ينزّلها؟",faqThreeA:"الفيديوهات والصور والملفات المرئية المتوافقة من المحادثات وMedia.",faqFourQ:"هل Encina تابع لـ Telegram؟",faqFourA:"لا. إنه أداة مستقلة وغير تابعة لـ Telegram.",closingTitle:"محتوى Telegram الخاص بك تحت سيطرتك.",closingText:"جرّب Encina واكتشف طريقة أكثر تكاملا لحفظ ما تحتاجه.",closingCta:"ابدأ مجانا",footerDisclaimer:"أداة مستقلة لـ Telegram Web وغير تابعة لـ Telegram.",footerPrivacy:"الخصوصية",footerTerms:"الشروط",footerSupport:"الدعم"
  },
  hi: {
    navFeatures:"सुविधाएं",navCompatibility:"अनुकूलता",navPricing:"प्लान",navFaq:"सवाल",navInstall:"इंस्टॉल",heroEyebrow:"Telegram Web A और K के लिए बनाया गया",heroText:"चैट और मीडिया गैलरी से वीडियो और इमेज डाउनलोड करें, स्पष्ट प्रगति और पूरे नियंत्रण के साथ।",heroCta:"Chrome में जोड़ें",heroSecondary:"देखें यह कैसे काम करता है",proofPrivate:"आपके पासवर्ड तक पहुंच नहीं",proofSimple:"सीधा डाउनलोड",proofLanguages:"14 भाषाएं",
    productEyebrow:"जो दिखता है, वह सेव करने के लिए तैयार है।",productTitle:"एक जुड़ा हुआ अनुभव, अलग विंडो नहीं",productText:"Encina Telegram में सटीक कंट्रोल जोड़ता है और चैट, Media तथा डाउनलोड मैनेजर के बीच प्रगति सिंक रखता है।",showcaseTitle:"पूरा काम एक ही जगह",showcaseText:"फाइल का प्रकार पहचानता है, वास्तविक समय की प्रगति दिखाता है और डाउनलोड याद रखता है।",showcaseOne:"वीडियो और इमेज पर सीधे बटन",showcaseTwo:"चैट और Media टैब से डाउनलोड",showcaseThree:"डाउनलोड रोकें, जारी रखें या बंद करें",
    managerEyebrow:"आपकी लाइब्रेरी व्यवस्थित",managerTitle:"हर डाउनलोड को एक पैनल से नियंत्रित करें",managerText:"Encina मिली हुई फाइलों को दृश्य मैनेजर में इकट्ठा करता है। थंबनेल, अवधि, आकार और प्रगति देखें।",managerPointOne:"वीडियो और इमेज अलग टैब में",managerPointTwo:"एकल या कई चयन",managerPointThree:"हर फाइल की अलग प्रगति",managerPointFour:"चल रहे डाउनलोड को रोके बिना रीफ्रेश",managerName:"Encina डाउनलोड मैनेजर",managerFound:"6 वीडियो मिले",managerPreview:"मुफ्त पूर्वावलोकन",managerUpgrade:"प्लान अपग्रेड",managerVideos:"वीडियो",managerImages:"इमेज",managerRefresh:"रीफ्रेश",managerSelected:"चुने हुए डाउनलोड करें",managerClear:"साफ करें",managerListFound:"6 वीडियो मिले",managerFileOne:"वीडियो: पहाड़ी-मार्ग-01",managerFileTwo:"वीडियो: रात-का-शहर-02",managerFileThree:"वीडियो: उत्तरी-रोशनी-03",managerFileFour:"वीडियो: हवाई-तट-04",managerDownload:"डाउनलोड",managerCompleted:"वीडियो · डाउनलोड पूरा",managerSaved:"सेव हुआ",
    featuresEyebrow:"सिर्फ डाउनलोड से अधिक",featuresTitle:"Telegram के वास्तविक उपयोगकर्ताओं के लिए टूल",featureMediaTitle:"पूरा Media समर्थन",featureMediaText:"चैट या मीडिया गैलरी की हर छोटी तस्वीर से डाउनलोड करें।",featureProgressTitle:"सिंक की गई प्रगति",featureProgressText:"दृश्य बदलने पर भी प्रतिशत उसी फाइल के साथ रहता है।",featureBatchTitle:"बैच मैनेजर",featureBatchText:"कई आइटम चुनें और हर डाउनलोड नियंत्रित करें।",featureDetectTitle:"स्मार्ट पहचान",featureDetectText:"इमेज और वीडियो में अंतर कर सही तरीका अपनाता है।",featureControlTitle:"पूरा नियंत्रण",featureControlText:"सत्र खोए बिना डाउनलोड रोकें, जारी रखें या बंद करें।",featureMemoryTitle:"डाउनलोड मेमोरी",featureMemoryText:"पूरी हुई फाइल पहचानकर दोबारा डाउनलोड से बचाता है।",
    settingsLabel:"सेटिंग्स",settingsLanguage:"भाषा",settingsSpanish:"हिन्दी",settingsDownloadControl:"डाउनलोड नियंत्रण",settingsPause:"सब रोकें",settingsResume:"सब जारी रखें",settingsStop:"सब बंद करें",settingsSmallMedia:"छोटा मीडिया दिखाएं",settingsSmallMediaHelp:"आइकन, प्रतिक्रिया और छोटी इमेज पर भी बटन जोड़ता है।",settingsLock:"डाउनलोड बटन लॉक करें",settingsLockHelp:"सेव हुई फाइल को गलती से दोबारा डाउनलोड होने से रोकता है।",settingsEyebrow:"हर उपयोगकर्ता के अनुकूल",settingsTitle:"स्पष्ट विकल्प, तुरंत लागू",settingsText:"पैनल Telegram को रीफ्रेश किए बिना Encina का व्यवहार बदलता है।",settingsExplainSmallTitle:"जरूरत पर अधिक पहुंच",settingsExplainSmallText:"छोटे तत्वों पर बटन चालू करें या साफ दृश्य के लिए बंद करें।",settingsExplainLockTitle:"डुप्लिकेट से सुरक्षा",settingsExplainLockText:"सफल डाउनलोड के बाद Encina बटन लॉक करके फाइल को सेव हुआ दिखा सकता है।",
    compatibilityEyebrow:"दो संस्करण। एक एक्सटेंशन।",compatibilityTitle:"Telegram A और K के लिए विशेष रूप से बनाया गया",compatibilityText:"हर संस्करण की अपनी अनुकूलित पहचान प्रणाली है।",tableFeature:"सुविधा",tableChat:"चैट डाउनलोड",tableMedia:"Media डाउनलोड",tableProgress:"दिखाई देने वाली प्रगति",tableManager:"बैच मैनेजर",
    pricingEyebrow:"बिना प्रतिबद्धता शुरू करें",pricingTitle:"मुफ्त आजमाएं। जरूरत पर अपग्रेड करें।",pricingText:"सार्वजनिक रिलीज से पहले सदस्यता प्रणाली जोड़ी जाएगी।",freeName:"मुफ्त",forever:"हमेशा",freeDescription:"Encina का पूरा अनुभव आजमाने के लिए।",freeDownloads:"हर 24 घंटे में 5 डाउनलोड",freeVersions:"Telegram A और K",freeTools:"दिखाई देने वाला मैनेजर और प्रगति",freeCta:"मुफ्त आजमाएं",popular:"सबसे लोकप्रिय",priceSoon:"जल्द आ रहा है",premiumDescription:"नियमित रूप से सामग्री डाउनलोड करने वालों के लिए।",premiumUnlimited:"कोई दैनिक सीमा नहीं",premiumPriority:"सर्वोत्तम उपलब्ध प्रदर्शन",premiumSupport:"प्राथमिक सहायता",premiumCta:"सूची में शामिल हों",
    faqEyebrow:"स्पष्ट जवाब",faqTitle:"अक्सर पूछे जाने वाले सवाल",faqOneQ:"क्या यह डेस्कटॉप ऐप के साथ काम करता है?",faqOneA:"Encina Chrome में Telegram Web A और K पर काम करता है। यह मूल ऐप को नियंत्रित नहीं करता।",faqTwoQ:"क्या यह निजी चैनल खोल सकता है?",faqTwoA:"यह केवल उस सामग्री के साथ काम करता है जिसे आपका खाता पहले से देख सकता है।",faqThreeQ:"यह कौन-सी सामग्री डाउनलोड कर सकता है?",faqThreeA:"चैट और Media से दिखाई देने वाले संगत वीडियो, इमेज और दूसरी फाइलें।",faqFourQ:"क्या Encina Telegram का हिस्सा है?",faqFourA:"नहीं। यह स्वतंत्र टूल है और Telegram से संबद्ध नहीं है।",closingTitle:"आपकी Telegram सामग्री, आपके नियंत्रण में।",closingText:"Encina आजमाएं और जरूरी सामग्री अधिक आसानी से सेव करें।",closingCta:"मुफ्त शुरू करें",footerDisclaimer:"Telegram Web के लिए स्वतंत्र टूल। Telegram से संबद्ध नहीं।",footerPrivacy:"गोपनीयता",footerTerms:"शर्तें",footerSupport:"सहायता"
  }
});

const currentPricingCopy = {
  en: {
    pricingText: "Use the free daily allowance or upgrade to Premium for unlimited downloads.",
    freeDownloads: "20 images and 5 videos every 24 hours",
    priceSoon: "$7.99 / month",
    premiumCta: "Upgrade to Premium"
  },
  es: {
    pricingText: "Usa la cuota diaria gratuita o mejora a Premium para obtener descargas ilimitadas.",
    freeDownloads: "20 imagenes y 5 videos cada 24 horas",
    priceSoon: "$7,99 / mes",
    premiumCta: "Mejorar a Premium"
  },
  pt: {
    pricingText: "Use a cota diaria gratuita ou assine o Premium para downloads ilimitados.",
    freeDownloads: "20 imagens e 5 videos a cada 24 horas",
    priceSoon: "US$ 7,99 / mes",
    premiumCta: "Assinar Premium"
  },
  de: {
    pricingText: "Nutzen Sie das kostenlose Tageskontingent oder Premium fur unbegrenzte Downloads.",
    freeDownloads: "20 Bilder und 5 Videos alle 24 Stunden",
    priceSoon: "7,99 USD / Monat",
    premiumCta: "Auf Premium upgraden"
  },
  tr: {
    pricingText: "Gunluk ucretsiz kotayi kullanin veya sinirsiz indirme icin Premium'a gecin.",
    freeDownloads: "Her 24 saatte 20 resim ve 5 video",
    priceSoon: "Ayda 7,99 USD",
    premiumCta: "Premium'a gec"
  },
  id: {
    pricingText: "Gunakan kuota gratis harian atau tingkatkan ke Premium untuk unduhan tanpa batas.",
    freeDownloads: "20 gambar dan 5 video setiap 24 jam",
    priceSoon: "US$7,99 / bulan",
    premiumCta: "Tingkatkan ke Premium"
  },
  vi: {
    pricingText: "Dung han muc mien phi hang ngay hoac nang cap Premium de tai xuong khong gioi han.",
    freeDownloads: "20 hinh anh va 5 video moi 24 gio",
    priceSoon: "7,99 USD / thang",
    premiumCta: "Nang cap Premium"
  },
  ja: {
    pricingText: "無料の日次枠を利用するか、Premiumで無制限にダウンロードできます。",
    freeDownloads: "24時間ごとに画像20枚と動画5本",
    priceSoon: "月額7.99米ドル",
    premiumCta: "Premiumにアップグレード"
  },
  zh: {
    pricingText: "使用每日免费额度，或升级到Premium以获得无限下载。",
    freeDownloads: "每24小时20张图片和5个视频",
    priceSoon: "每月7.99美元",
    premiumCta: "升级到Premium"
  },
  it: {
    pricingText: "Usa la quota gratuita giornaliera o passa a Premium per download illimitati.",
    freeDownloads: "20 immagini e 5 video ogni 24 ore",
    priceSoon: "7,99 USD / mese",
    premiumCta: "Passa a Premium"
  },
  fr: {
    pricingText: "Utilisez le quota gratuit quotidien ou passez a Premium pour des telechargements illimites.",
    freeDownloads: "20 images et 5 videos toutes les 24 heures",
    priceSoon: "7,99 USD / mois",
    premiumCta: "Passer a Premium"
  },
  ru: {
    pricingText: "Используйте бесплатный дневной лимит или Premium для неограниченных загрузок.",
    freeDownloads: "20 изображений и 5 видео каждые 24 часа",
    priceSoon: "7,99 USD / месяц",
    premiumCta: "Перейти на Premium"
  },
  ar: {
    pricingText: "استخدم الحصة اليومية المجانية أو قم بالترقية إلى Premium لتنزيلات غير محدودة.",
    freeDownloads: "20 صورة و5 فيديوهات كل 24 ساعة",
    priceSoon: "7.99 دولار شهريا",
    premiumCta: "الترقية إلى Premium"
  },
  hi: {
    pricingText: "दैनिक मुफ्त सीमा का उपयोग करें या असीमित डाउनलोड के लिए Premium लें।",
    freeDownloads: "हर 24 घंटे में 20 चित्र और 5 वीडियो",
    priceSoon: "7.99 USD / माह",
    premiumCta: "Premium में अपग्रेड करें"
  }
};

Object.entries(currentPricingCopy).forEach(([language, copy]) => {
  Object.assign(translations[language], copy);
});

const pricingPlansCopy = {
  en: {
    plansEyebrow:"Choose your plan",planStart:"To get started",planMonthly:"Monthly",planQuarterly:"Quarterly",planAnnual:"Annual",perMonth:"per month",comingSoon:"Coming soon",
    quarterlyDescription:"A flexible option with additional benefits.",quarterlyBenefitOne:"Everything in the monthly plan",quarterlyBenefitTwo:"Early access to features",quarterlyBenefitThree:"Premium support",
    annualDescription:"Designed for long-term users.",annualBenefitOne:"Everything in the monthly plan",annualBenefitTwo:"Exclusive benefits",annualBenefitThree:"Maximum priority",
    securePayments:"Secure transactions",instantActivation:"Instant activation",cancelAnytime:"Cancel anytime"
  },
  es: {
    plansEyebrow:"Elige tu plan",planStart:"Para comenzar",planMonthly:"Mensual",planQuarterly:"Trimestral",planAnnual:"Anual",perMonth:"por mes",comingSoon:"Próximamente",
    quarterlyDescription:"Una opción flexible con beneficios adicionales.",quarterlyBenefitOne:"Todo lo del plan mensual",quarterlyBenefitTwo:"Acceso anticipado a funciones",quarterlyBenefitThree:"Soporte Premium",
    annualDescription:"El plan pensado para usuarios de largo plazo.",annualBenefitOne:"Todo lo del plan mensual",annualBenefitTwo:"Beneficios exclusivos",annualBenefitThree:"Prioridad máxima",
    securePayments:"Transacciones seguras",instantActivation:"Activación instantánea",cancelAnytime:"Cancela cuando quieras"
  },
  it: {
    plansEyebrow:"Scegli il tuo piano",planStart:"Per iniziare",planMonthly:"Mensile",planQuarterly:"Trimestrale",planAnnual:"Annuale",perMonth:"al mese",comingSoon:"Prossimamente",
    quarterlyDescription:"Un'opzione flessibile con vantaggi aggiuntivi.",quarterlyBenefitOne:"Tutto del piano mensile",quarterlyBenefitTwo:"Accesso anticipato alle funzioni",quarterlyBenefitThree:"Supporto Premium",
    annualDescription:"Pensato per gli utenti a lungo termine.",annualBenefitOne:"Tutto del piano mensile",annualBenefitTwo:"Vantaggi esclusivi",annualBenefitThree:"Priorità massima",
    securePayments:"Transazioni sicure",instantActivation:"Attivazione immediata",cancelAnytime:"Annulla quando vuoi"
  },
  fr: {
    plansEyebrow:"Choisissez votre offre",planStart:"Pour commencer",planMonthly:"Mensuel",planQuarterly:"Trimestriel",planAnnual:"Annuel",perMonth:"par mois",comingSoon:"Bientôt disponible",
    quarterlyDescription:"Une formule flexible avec des avantages supplémentaires.",quarterlyBenefitOne:"Tout le forfait mensuel",quarterlyBenefitTwo:"Accès anticipé aux fonctions",quarterlyBenefitThree:"Assistance Premium",
    annualDescription:"Conçu pour une utilisation à long terme.",annualBenefitOne:"Tout le forfait mensuel",annualBenefitTwo:"Avantages exclusifs",annualBenefitThree:"Priorité maximale",
    securePayments:"Transactions sécurisées",instantActivation:"Activation instantanée",cancelAnytime:"Résiliez à tout moment"
  },
  pt: {
    plansEyebrow:"Escolha seu plano",planStart:"Para começar",planMonthly:"Mensal",planQuarterly:"Trimestral",planAnnual:"Anual",perMonth:"por mês",comingSoon:"Em breve",
    quarterlyDescription:"Uma opção flexível com benefícios adicionais.",quarterlyBenefitOne:"Tudo do plano mensal",quarterlyBenefitTwo:"Acesso antecipado a recursos",quarterlyBenefitThree:"Suporte Premium",
    annualDescription:"Pensado para usuários de longo prazo.",annualBenefitOne:"Tudo do plano mensal",annualBenefitTwo:"Benefícios exclusivos",annualBenefitThree:"Prioridade máxima",
    securePayments:"Transações seguras",instantActivation:"Ativação instantânea",cancelAnytime:"Cancele quando quiser"
  },
  de: {
    plansEyebrow:"Wähle deinen Plan",planStart:"Zum Einstieg",planMonthly:"Monatlich",planQuarterly:"Vierteljährlich",planAnnual:"Jährlich",perMonth:"pro Monat",comingSoon:"Demnächst",
    quarterlyDescription:"Eine flexible Option mit zusätzlichen Vorteilen.",quarterlyBenefitOne:"Alles aus dem Monatsplan",quarterlyBenefitTwo:"Früher Zugang zu Funktionen",quarterlyBenefitThree:"Premium-Support",
    annualDescription:"Für langfristige Nutzer entwickelt.",annualBenefitOne:"Alles aus dem Monatsplan",annualBenefitTwo:"Exklusive Vorteile",annualBenefitThree:"Höchste Priorität",
    securePayments:"Sichere Transaktionen",instantActivation:"Sofortige Aktivierung",cancelAnytime:"Jederzeit kündbar"
  },
  tr: {
    plansEyebrow:"Planını seç",planStart:"Başlangıç için",planMonthly:"Aylık",planQuarterly:"Üç aylık",planAnnual:"Yıllık",perMonth:"aylık",comingSoon:"Yakında",
    quarterlyDescription:"Ek avantajlara sahip esnek bir seçenek.",quarterlyBenefitOne:"Aylık plandaki her şey",quarterlyBenefitTwo:"Özelliklere erken erişim",quarterlyBenefitThree:"Premium destek",
    annualDescription:"Uzun süreli kullanıcılar için.",annualBenefitOne:"Aylık plandaki her şey",annualBenefitTwo:"Özel avantajlar",annualBenefitThree:"En yüksek öncelik",
    securePayments:"Güvenli işlemler",instantActivation:"Anında etkinleştirme",cancelAnytime:"İstediğin zaman iptal et"
  },
  id: {
    plansEyebrow:"Pilih paket Anda",planStart:"Untuk memulai",planMonthly:"Bulanan",planQuarterly:"Tiga bulanan",planAnnual:"Tahunan",perMonth:"per bulan",comingSoon:"Segera hadir",
    quarterlyDescription:"Pilihan fleksibel dengan manfaat tambahan.",quarterlyBenefitOne:"Semua dalam paket bulanan",quarterlyBenefitTwo:"Akses awal ke fitur",quarterlyBenefitThree:"Dukungan Premium",
    annualDescription:"Dirancang untuk pengguna jangka panjang.",annualBenefitOne:"Semua dalam paket bulanan",annualBenefitTwo:"Manfaat eksklusif",annualBenefitThree:"Prioritas maksimum",
    securePayments:"Transaksi aman",instantActivation:"Aktivasi instan",cancelAnytime:"Batalkan kapan saja"
  },
  vi: {
    plansEyebrow:"Chọn gói của bạn",planStart:"Để bắt đầu",planMonthly:"Hàng tháng",planQuarterly:"Hàng quý",planAnnual:"Hàng năm",perMonth:"mỗi tháng",comingSoon:"Sắp ra mắt",
    quarterlyDescription:"Lựa chọn linh hoạt với nhiều quyền lợi hơn.",quarterlyBenefitOne:"Mọi quyền lợi của gói tháng",quarterlyBenefitTwo:"Truy cập sớm tính năng",quarterlyBenefitThree:"Hỗ trợ Premium",
    annualDescription:"Dành cho người dùng lâu dài.",annualBenefitOne:"Mọi quyền lợi của gói tháng",annualBenefitTwo:"Quyền lợi độc quyền",annualBenefitThree:"Ưu tiên cao nhất",
    securePayments:"Giao dịch an toàn",instantActivation:"Kích hoạt tức thì",cancelAnytime:"Hủy bất cứ lúc nào"
  },
  ru: {
    plansEyebrow:"Выберите тариф",planStart:"Для начала",planMonthly:"Ежемесячно",planQuarterly:"На три месяца",planAnnual:"Ежегодно",perMonth:"в месяц",comingSoon:"Скоро",
    quarterlyDescription:"Гибкий вариант с дополнительными преимуществами.",quarterlyBenefitOne:"Всё из месячного тарифа",quarterlyBenefitTwo:"Ранний доступ к функциям",quarterlyBenefitThree:"Премиум-поддержка",
    annualDescription:"Для долгосрочного использования.",annualBenefitOne:"Всё из месячного тарифа",annualBenefitTwo:"Эксклюзивные преимущества",annualBenefitThree:"Максимальный приоритет",
    securePayments:"Безопасные платежи",instantActivation:"Мгновенная активация",cancelAnytime:"Отмена в любое время"
  },
  zh: {
    plansEyebrow:"选择你的方案",planStart:"开始使用",planMonthly:"月付",planQuarterly:"季付",planAnnual:"年付",perMonth:"每月",comingSoon:"即将推出",
    quarterlyDescription:"灵活的方案，包含更多权益。",quarterlyBenefitOne:"包含月付方案全部功能",quarterlyBenefitTwo:"抢先体验新功能",quarterlyBenefitThree:"高级支持",
    annualDescription:"为长期用户设计。",annualBenefitOne:"包含月付方案全部功能",annualBenefitTwo:"专属权益",annualBenefitThree:"最高优先级",
    securePayments:"安全交易",instantActivation:"即时激活",cancelAnytime:"随时取消"
  },
  ja: {
    plansEyebrow:"プランを選択",planStart:"はじめる",planMonthly:"月額",planQuarterly:"3か月",planAnnual:"年額",perMonth:"月額",comingSoon:"近日公開",
    quarterlyDescription:"追加特典を備えた柔軟なプランです。",quarterlyBenefitOne:"月額プランの全機能",quarterlyBenefitTwo:"新機能への先行アクセス",quarterlyBenefitThree:"プレミアムサポート",
    annualDescription:"長期利用者向けのプランです。",annualBenefitOne:"月額プランの全機能",annualBenefitTwo:"限定特典",annualBenefitThree:"最高優先度",
    securePayments:"安全な取引",instantActivation:"即時有効化",cancelAnytime:"いつでも解約可能"
  },
  ar: {
    plansEyebrow:"اختر خطتك",planStart:"للبدء",planMonthly:"شهري",planQuarterly:"ربع سنوي",planAnnual:"سنوي",perMonth:"شهريًا",comingSoon:"قريبًا",
    quarterlyDescription:"خيار مرن مع مزايا إضافية.",quarterlyBenefitOne:"كل مزايا الخطة الشهرية",quarterlyBenefitTwo:"وصول مبكر إلى الميزات",quarterlyBenefitThree:"دعم مميز",
    annualDescription:"مصمم للمستخدمين على المدى الطويل.",annualBenefitOne:"كل مزايا الخطة الشهرية",annualBenefitTwo:"مزايا حصرية",annualBenefitThree:"أولوية قصوى",
    securePayments:"معاملات آمنة",instantActivation:"تفعيل فوري",cancelAnytime:"إلغاء في أي وقت"
  },
  hi: {
    plansEyebrow:"अपना प्लान चुनें",planStart:"शुरू करने के लिए",planMonthly:"मासिक",planQuarterly:"त्रैमासिक",planAnnual:"वार्षिक",perMonth:"प्रति माह",comingSoon:"जल्द आ रहा है",
    quarterlyDescription:"अतिरिक्त लाभों वाला लचीला विकल्प।",quarterlyBenefitOne:"मासिक प्लान की सभी सुविधाएँ",quarterlyBenefitTwo:"नई सुविधाओं की शुरुआती पहुँच",quarterlyBenefitThree:"प्रीमियम सहायता",
    annualDescription:"लंबी अवधि के उपयोगकर्ताओं के लिए।",annualBenefitOne:"मासिक प्लान की सभी सुविधाएँ",annualBenefitTwo:"विशेष लाभ",annualBenefitThree:"सर्वोच्च प्राथमिकता",
    securePayments:"सुरक्षित लेनदेन",instantActivation:"तुरंत सक्रिय",cancelAnytime:"कभी भी रद्द करें"
  }
};

Object.entries(pricingPlansCopy).forEach(([language, copy]) => {
  Object.assign(translations[language], copy);
});

const videoTypeLabels = {
  en:"VIDEO",es:"VIDEO",it:"VIDEO",fr:"VIDÉO",zh:"视频",ru:"ВИДЕО",ar:"فيديو",hi:"वीडियो",
  pt:"VÍDEO",de:"VIDEO",tr:"VİDEO",id:"VIDEO",vi:"VIDEO",ja:"動画"
};

Object.entries(videoTypeLabels).forEach(([code, label]) => {
  translations[code].managerTypeVideo = label;
});

const demoLocaleData = {
  es: { nav:"Demostracion", eyebrow:"Demostracion guiada", title:"Mira como funciona", text:"Descubre como descargar imagenes y videos de Telegram Web de forma rapida, simple y organizada.", fictional:"Contenido ficticio", duration:"2 minutos", tracks:"Pistas de demostracion", current:"Idioma de la pagina", future:"Mas pistas proximamente", next:"Siguiente capitulo", intro:"Introduccion", install:"Instalacion", free:"Plan gratuito", login:"Inicio de sesion", quota:"Cuotas diarias", learn:"Quieres aprender mas?", traditional:"Tradicional" },
  en: { nav:"Demo", eyebrow:"Guided demo", title:"See how it works", text:"Discover how to download images and videos from Telegram Web quickly, simply and in an organized way.", fictional:"Fictional content", duration:"2 minutes", tracks:"Demo tracks", current:"Page language", future:"More tracks coming soon", next:"Next chapter", intro:"Introduction", install:"Installation", free:"Free plan", login:"Sign in", quota:"Daily quotas", learn:"Want to learn more?", traditional:"Traditional" },
  pt: { nav:"Demonstracao", eyebrow:"Demonstracao guiada", title:"Veja como funciona", text:"Descubra como baixar imagens e videos do Telegram Web de forma rapida, simples e organizada.", fictional:"Conteudo ficticio", duration:"2 minutos", tracks:"Faixas da demonstracao", current:"Idioma da pagina", future:"Mais faixas em breve", next:"Proximo capitulo", intro:"Introducao", install:"Instalacao", free:"Plano gratuito", login:"Entrar", quota:"Cotas diarias", learn:"Quer aprender mais?", traditional:"Tradicional" },
  de: { nav:"Demo", eyebrow:"Gefuhrte Demo", title:"So funktioniert es", text:"Erfahren Sie, wie Sie Bilder und Videos aus Telegram Web schnell, einfach und geordnet herunterladen.", fictional:"Fiktive Inhalte", duration:"2 Minuten", tracks:"Demo-Spuren", current:"Seitensprache", future:"Weitere Spuren folgen", next:"Nachstes Kapitel", intro:"Einfuhrung", install:"Installation", free:"Kostenloser Plan", login:"Anmelden", quota:"Tagliche Kontingente", learn:"Mehr erfahren?", traditional:"Klassisch" },
  it: { nav:"Demo", eyebrow:"Demo guidata", title:"Guarda come funziona", text:"Scopri come scaricare immagini e video da Telegram Web in modo rapido, semplice e organizzato.", fictional:"Contenuto fittizio", duration:"2 minuti", tracks:"Tracce demo", current:"Lingua della pagina", future:"Altre tracce in arrivo", next:"Capitolo successivo", intro:"Introduzione", install:"Installazione", free:"Piano gratuito", login:"Accesso", quota:"Quote giornaliere", learn:"Vuoi saperne di piu?", traditional:"Tradizionale" },
  fr: { nav:"Demo", eyebrow:"Demo guidee", title:"Decouvrez son fonctionnement", text:"Decouvrez comment telecharger des images et des videos depuis Telegram Web rapidement et simplement.", fictional:"Contenu fictif", duration:"2 minutes", tracks:"Pistes de demonstration", current:"Langue de la page", future:"Autres pistes prochainement", next:"Chapitre suivant", intro:"Introduction", install:"Installation", free:"Offre gratuite", login:"Connexion", quota:"Quotas quotidiens", learn:"Vous voulez en savoir plus ?", traditional:"Traditionnel" },
  tr: { nav:"Demo", eyebrow:"Rehberli demo", title:"Nasil calistigini gorun", text:"Telegram Web'den resim ve videolari hizli, kolay ve duzenli bicimde indirmeyi kesfedin.", fictional:"Kurgusal icerik", duration:"2 dakika", tracks:"Demo parcalari", current:"Sayfa dili", future:"Yeni parcalar yakinda", next:"Sonraki bolum", intro:"Giris", install:"Kurulum", free:"Ucretsiz plan", login:"Oturum acma", quota:"Gunluk kotalar", learn:"Daha fazlasini ogrenmek ister misiniz?", traditional:"Geleneksel" },
  id: { nav:"Demo", eyebrow:"Demo terpandu", title:"Lihat cara kerjanya", text:"Pelajari cara mengunduh gambar dan video dari Telegram Web dengan cepat, mudah, dan teratur.", fictional:"Konten fiktif", duration:"2 menit", tracks:"Trek demo", current:"Bahasa halaman", future:"Trek lain segera hadir", next:"Bab berikutnya", intro:"Pengantar", install:"Instalasi", free:"Paket gratis", login:"Masuk", quota:"Kuota harian", learn:"Ingin belajar lebih lanjut?", traditional:"Tradisional" },
  vi: { nav:"Ban demo", eyebrow:"Ban demo huong dan", title:"Xem cach hoat dong", text:"Kham pha cach tai hinh anh va video tu Telegram Web nhanh chong, don gian va co to chuc.", fictional:"Noi dung gia lap", duration:"2 phut", tracks:"Ban am demo", current:"Ngon ngu trang", future:"Them ban am sap ra mat", next:"Chuong tiep theo", intro:"Gioi thieu", install:"Cai dat", free:"Goi mien phi", login:"Dang nhap", quota:"Han muc hang ngay", learn:"Ban muon tim hieu them?", traditional:"Truyen thong" },
  ja: { nav:"デモ", eyebrow:"ガイド付きデモ", title:"使い方を見る", text:"Telegram Webから画像と動画をすばやく簡単に整理して保存する方法を紹介します。", fictional:"架空のコンテンツ", duration:"2分", tracks:"デモ音声", current:"ページの言語", future:"追加音声は近日公開", next:"次の章", intro:"はじめに", install:"インストール", free:"無料プラン", login:"ログイン", quota:"1日の上限", learn:"さらに詳しく見る", traditional:"従来型" },
  zh: { nav:"演示", eyebrow:"引导演示", title:"查看使用方式", text:"了解如何快速、简单、有序地从 Telegram Web 下载图片和视频。", fictional:"虚构内容", duration:"2 分钟", tracks:"演示音轨", current:"页面语言", future:"更多音轨即将推出", next:"下一章节", intro:"介绍", install:"安装", free:"免费方案", login:"登录", quota:"每日额度", learn:"想了解更多吗？", traditional:"传统工具" },
  ru: { nav:"Демо", eyebrow:"Пошаговая демонстрация", title:"Посмотрите, как это работает", text:"Узнайте, как быстро и удобно загружать изображения и видео из Telegram Web.", fictional:"Вымышленный контент", duration:"2 минуты", tracks:"Дорожки демонстрации", current:"Язык страницы", future:"Новые дорожки скоро", next:"Следующая глава", intro:"Введение", install:"Установка", free:"Бесплатный план", login:"Вход", quota:"Дневные лимиты", learn:"Хотите узнать больше?", traditional:"Обычные решения" },
  ar: { nav:"عرض توضيحي", eyebrow:"عرض إرشادي", title:"شاهد كيف يعمل", text:"اكتشف كيفية تنزيل الصور ومقاطع الفيديو من Telegram Web بسرعة وسهولة وتنظيم.", fictional:"محتوى خيالي", duration:"دقيقتان", tracks:"مسارات العرض", current:"لغة الصفحة", future:"مسارات إضافية قريباً", next:"الفصل التالي", intro:"مقدمة", install:"التثبيت", free:"الخطة المجانية", login:"تسجيل الدخول", quota:"الحصص اليومية", learn:"هل تريد معرفة المزيد؟", traditional:"تقليدي" },
  hi: { nav:"डेमो", eyebrow:"निर्देशित डेमो", title:"देखें यह कैसे काम करता है", text:"Telegram Web से चित्र और वीडियो तेज, सरल और व्यवस्थित तरीके से डाउनलोड करना सीखें।", fictional:"काल्पनिक सामग्री", duration:"2 मिनट", tracks:"डेमो ट्रैक", current:"पेज की भाषा", future:"और ट्रैक जल्द आएंगे", next:"अगला अध्याय", intro:"परिचय", install:"इंस्टॉलेशन", free:"मुफ्त प्लान", login:"साइन इन", quota:"दैनिक सीमा", learn:"और जानना चाहते हैं?", traditional:"पारंपरिक" }
};

Object.entries(demoLocaleData).forEach(([code, demo]) => {
  const base = translations[code] || translations.en;
  Object.assign(base, {
    navDemo: demo.nav,
    demoEyebrow: demo.eyebrow,
    demoTitle: demo.title,
    demoText: demo.text,
    demoFictional: demo.fictional,
    demoCompatible: "Telegram Web A + K",
    demoDuration: demo.duration,
    demoTracks: demo.tracks,
    demoTrackCurrent: demo.current,
    demoTrackFuture: demo.future,
    demoNext: demo.next,
    chapterIntro: demo.intro,
    chapterInstall: demo.install,
    chapterImages: base.managerImages,
    chapterVideos: base.managerVideos,
    chapterFree: demo.free,
    chapterLogin: demo.login,
    chapterQuota: demo.quota,
    chapterPremium: "Premium",
    demoSceneOneKicker: demo.eyebrow,
    demoSceneOneTitle: demo.title,
    demoSceneOneText: demo.text,
    demoSceneOneBenefit: base.showcaseText,
    demoDownloadVideo: base.managerDownload,
    demoLearnEyebrow: base.productEyebrow,
    demoLearnTitle: demo.learn,
    demoLearnButton: demo.title,
    compareEyebrow: base.featuresEyebrow,
    compareTitle: base.featuresTitle,
    compareText: base.productText,
    compareFeature: base.tableFeature,
    compareTraditional: demo.traditional,
    compareModern: base.settingsTitle,
    compareImages: base.managerImages,
    compareVideos: base.managerVideos,
    compareAccount: demo.login,
    compareVersions: base.compatibilityTitle,
    compareManager: base.managerTitle
  });
});

const fallbackCopies = {
  it: { navFeatures:"Funzioni",navCompatibility:"Compatibilità",navPricing:"Piani",navFaq:"Domande",navInstall:"Installa",heroEyebrow:"Creato per Telegram Web A e K",heroText:"Scarica video e immagini da chat e gallerie multimediali con avanzamento visibile e controllo completo.",heroCta:"Aggiungi a Chrome",heroSecondary:"Scopri come funziona" },
  fr: { navFeatures:"Fonctions",navCompatibility:"Compatibilité",navPricing:"Offres",navFaq:"Questions",navInstall:"Installer",heroEyebrow:"Conçu pour Telegram Web A et K",heroText:"Téléchargez vidéos et images depuis les chats et galeries avec progression visible et contrôle complet.",heroCta:"Ajouter à Chrome",heroSecondary:"Voir le fonctionnement" },
  zh: { navFeatures:"功能",navCompatibility:"兼容性",navPricing:"方案",navFaq:"常见问题",navInstall:"安装",heroEyebrow:"专为 Telegram Web A 和 K 打造",heroText:"从聊天和媒体图库下载视频与图片，实时查看进度并完全掌控。",heroCta:"添加到 Chrome",heroSecondary:"查看使用方式" },
  ru: { navFeatures:"Функции",navCompatibility:"Совместимость",navPricing:"Тарифы",navFaq:"Вопросы",navInstall:"Установить",heroEyebrow:"Создано для Telegram Web A и K",heroText:"Скачивайте видео и изображения из чатов и медиагалерей с видимым прогрессом и полным контролем.",heroCta:"Добавить в Chrome",heroSecondary:"Как это работает" },
  ar: { navFeatures:"المزايا",navCompatibility:"التوافق",navPricing:"الخطط",navFaq:"الأسئلة",navInstall:"تثبيت",heroEyebrow:"مصمم لـ Telegram Web A و K",heroText:"نزّل الفيديوهات والصور من المحادثات ومعرض الوسائط مع تقدم واضح وتحكم كامل.",heroCta:"إضافة إلى Chrome",heroSecondary:"شاهد كيف يعمل" },
  hi: { navFeatures:"सुविधाएं",navCompatibility:"अनुकूलता",navPricing:"प्लान",navFaq:"सवाल",navInstall:"इंस्टॉल",heroEyebrow:"Telegram Web A और K के लिए बनाया गया",heroText:"चैट और मीडिया गैलरी से वीडियो और इमेज डाउनलोड करें, स्पष्ट प्रगति और पूरे नियंत्रण के साथ।",heroCta:"Chrome में जोड़ें",heroSecondary:"देखें कैसे काम करता है" }
};

const menu = document.querySelector("#language-menu");
const trigger = document.querySelector("#language-trigger");
const currentFlag = document.querySelector("#current-flag");
const currentLanguage = document.querySelector("#current-language");
let activeLanguage = "es";

Object.entries(languages).forEach(([code, language]) => {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.language = code;
  button.setAttribute("role", "option");
  button.innerHTML = `<span class="language-flag flag-${code}" aria-hidden="true"></span><span>${language.name}</span>`;
  menu.appendChild(button);
});

function copyFor(language) {
  return translations[language] || fallbackCopies[language] || translations.en;
}

function setLanguage(language) {
  const selected = languages[language] ? language : "en";
  const copy = copyFor(selected);
  activeLanguage = selected;
  document.documentElement.lang = selected;
  document.documentElement.dir = selected === "ar" ? "rtl" : "ltr";
  document.title = "Telegram Downloader by Encina";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n] ?? element.textContent;
  });
  currentFlag.textContent = "";
  currentFlag.className = `language-flag flag-${selected}`;
  currentLanguage.textContent = languages[selected].name;
  menu.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === selected);
  });
  localStorage.setItem("senna-site-language", selected);
  renderDemoScene();
}

trigger.addEventListener("click", () => {
  const open = menu.hidden;
  menu.hidden = !open;
  trigger.setAttribute("aria-expanded", String(open));
});

menu.addEventListener("click", (event) => {
  const option = event.target.closest("[data-language]");
  if (!option) return;
  setLanguage(option.dataset.language);
  menu.hidden = true;
  trigger.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-picker")) {
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-version]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-version]").forEach((item) => item.classList.toggle("is-active", item === button));
    const version = button.dataset.version;
    document.querySelector("#product-image").src = `assets/product-fictional-${version}.png`;
    document.querySelector("#version-path").textContent = version;
  });
});

const demoPlayer = document.querySelector("#demo-player");
const demoPlay = document.querySelector("#demo-play");
const demoCenterPlay = document.querySelector("#demo-center-play");
const demoRestart = document.querySelector("#demo-restart");
const demoTimeline = document.querySelector("#demo-timeline");
const demoTimelineBuffer = document.querySelector("#demo-timeline-buffer");
const demoTimelineProgress = document.querySelector("#demo-timeline-progress");
const demoTimelineThumb = document.querySelector("#demo-timeline-thumb");
const demoTime = document.querySelector("#demo-time");
const demoStepNumber = document.querySelector("#demo-step-number");
const demoSceneImage = document.querySelector("#demo-scene-image");
const demoBrowserPath = document.querySelector("#demo-browser-path");
const demoActionIcon = document.querySelector("#demo-action-icon");
const demoSceneKicker = document.querySelector("#demo-scene-kicker");
const demoSceneTitle = document.querySelector("#demo-scene-title");
const demoSceneText = document.querySelector("#demo-scene-text");
const demoGuideKicker = document.querySelector("#demo-guide-kicker");
const demoGuideTitle = document.querySelector("#demo-guide-title");
const demoGuideText = document.querySelector("#demo-guide-text");
const demoGuideBenefit = document.querySelector("#demo-guide-benefit");
const demoDownloadPill = document.querySelector("#demo-download-pill");
const demoDownloadLabel = document.querySelector("#demo-download-label");
const demoDownloadProgress = document.querySelector("#demo-download-progress");
const demoCaptions = document.querySelector("#demo-captions");
const demoAudio = document.querySelector("#demo-audio");
const demoTrackMenu = document.querySelector("#demo-track-menu");
const demoFullscreen = document.querySelector("#demo-fullscreen");
const demoNext = document.querySelector("#demo-next");
const demoChapterButtons = [...document.querySelectorAll("[data-demo-chapter]")];

const demoScenes = [
  { title:"chapterIntro", text:"demoText", benefit:"showcaseText", icon:"sparkles", version:"k", progress:0 },
  { title:"chapterInstall", text:"productText", benefit:"proofSimple", icon:"chrome", version:"k", progress:0 },
  { title:"chapterImages", text:"featureMediaText", benefit:"featureDetectText", icon:"image-down", version:"k", progress:100, media:"image" },
  { title:"chapterVideos", text:"featureProgressText", benefit:"featureControlText", icon:"video", version:"k", progress:68, media:"video" },
  { title:"chapterFree", text:"freeDescription", benefit:"freeDownloads", icon:"gift", version:"k", progress:0 },
  { title:"chapterLogin", text:"settingsText", benefit:"proofPrivate", icon:"log-in", version:"k", progress:0 },
  { title:"chapterQuota", text:"pricingText", benefit:"freeTools", icon:"gauge", version:"k", progress:42, media:"video" },
  { title:"chapterPremium", text:"premiumDescription", benefit:"premiumUnlimited", icon:"crown", version:"k", progress:100, media:"video" },
  { title:null, fixedTitle:"Telegram Web A", text:"compatibilityText", benefit:"showcaseOne", icon:"monitor-check", version:"a", progress:74, media:"video" },
  { title:null, fixedTitle:"Telegram Web K", text:"showcaseText", benefit:"showcaseTwo", icon:"circle-check-big", version:"k", progress:100, media:"video" }
];

let demoCurrentTime = 0;
let demoIsPlaying = false;
let demoFrame = 0;
let demoLastTick = 0;
let demoSceneIndex = -1;

function demoFormatTime(value) {
  const seconds = Math.max(0, Math.min(120, Math.floor(value)));
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function renderDemoScene() {
  if (!demoPlayer) return;
  const copy = copyFor(activeLanguage);
  const sceneIndex = Math.min(9, Math.floor(demoCurrentTime / 12));
  const scene = demoScenes[sceneIndex];
  const sceneChanged = sceneIndex !== demoSceneIndex;
  demoSceneIndex = sceneIndex;
  const title = scene.fixedTitle || copy[scene.title] || copy.demoTitle;
  const text = copy[scene.text] || copy.demoText;
  const benefit = copy[scene.benefit] || copy.demoSceneOneBenefit;

  demoPlayer.dataset.scene = String(sceneIndex);
  demoStepNumber.textContent = String(sceneIndex + 1).padStart(2, "0");
  demoSceneKicker.textContent = copy.demoEyebrow;
  demoGuideKicker.textContent = copy.demoEyebrow;
  demoSceneTitle.textContent = title;
  demoGuideTitle.textContent = title;
  demoSceneText.textContent = text;
  demoGuideText.textContent = text;
  demoGuideBenefit.textContent = benefit;
  demoBrowserPath.textContent = `web.telegram.org/${scene.version}/`;

  if (sceneChanged) {
    demoSceneImage.style.opacity = "0.62";
    window.setTimeout(() => {
      demoSceneImage.src = `assets/product-fictional-${scene.version}.png`;
      demoSceneImage.style.opacity = "1";
    }, 120);
  }

  demoActionIcon.innerHTML = `<i data-lucide="${scene.icon}"></i>`;
  demoDownloadPill.hidden = !scene.media;
  demoDownloadLabel.textContent = scene.media === "image"
    ? `${copy.managerDownload} ${copy.managerImages}`
    : `${copy.managerDownload} ${copy.managerVideos}`;
  demoDownloadProgress.textContent = `${scene.progress}%`;
  demoDownloadPill.style.setProperty("--demo-progress", `${scene.progress}%`);
  demoChapterButtons.forEach((button, index) => button.classList.toggle("is-active", index === sceneIndex));
  window.lucide?.createIcons();
}

function renderDemoProgress() {
  if (!demoPlayer) return;
  const percent = Math.min(100, (demoCurrentTime / 120) * 100);
  demoTimelineProgress.style.width = `${percent}%`;
  demoTimelineThumb.style.left = `${percent}%`;
  demoTimelineBuffer.style.width = `${Math.min(100, percent + 18)}%`;
  demoTimeline.setAttribute("aria-valuenow", String(Math.round(demoCurrentTime)));
  demoTime.textContent = `${demoFormatTime(demoCurrentTime)} / 02:00`;
  renderDemoScene();
}

function setDemoPlaying(playing) {
  if (playing === demoIsPlaying) return;
  demoIsPlaying = playing;
  demoPlayer?.classList.toggle("is-playing", playing);
  if (demoPlay) demoPlay.innerHTML = `<i data-lucide="${playing ? "pause" : "play"}"></i>`;
  if (demoCenterPlay) demoCenterPlay.innerHTML = `<i data-lucide="${playing ? "pause" : "play"}"></i>`;
  window.lucide?.createIcons();
  if (playing) {
    demoLastTick = performance.now();
    demoFrame = requestAnimationFrame(tickDemo);
  } else {
    cancelAnimationFrame(demoFrame);
  }
}

function tickDemo(now) {
  if (!demoIsPlaying) return;
  demoCurrentTime += (now - demoLastTick) / 1000;
  demoLastTick = now;
  if (demoCurrentTime >= 120) {
    demoCurrentTime = 120;
    setDemoPlaying(false);
  }
  renderDemoProgress();
  if (demoIsPlaying) demoFrame = requestAnimationFrame(tickDemo);
}

function toggleDemoPlayback() {
  if (demoCurrentTime >= 120) demoCurrentTime = 0;
  setDemoPlaying(!demoIsPlaying);
  renderDemoProgress();
}

[demoPlay, demoCenterPlay].forEach((button) => button?.addEventListener("click", toggleDemoPlayback));

demoRestart?.addEventListener("click", () => {
  demoCurrentTime = 0;
  setDemoPlaying(true);
  renderDemoProgress();
});

demoTimeline?.addEventListener("click", (event) => {
  const rect = demoTimeline.getBoundingClientRect();
  demoCurrentTime = Math.max(0, Math.min(120, ((event.clientX - rect.left) / rect.width) * 120));
  renderDemoProgress();
});

demoTimeline?.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  demoCurrentTime = Math.max(0, Math.min(120, demoCurrentTime + (event.key === "ArrowRight" ? 5 : -5)));
  renderDemoProgress();
});

demoChapterButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    demoCurrentTime = index * 12;
    renderDemoProgress();
  });
});

demoNext?.addEventListener("click", () => {
  demoCurrentTime = Math.min(108, (Math.min(9, demoSceneIndex + 1)) * 12);
  renderDemoProgress();
});

demoCaptions?.addEventListener("click", () => {
  demoCaptions.classList.toggle("is-active");
  document.querySelector("#demo-action-card")?.classList.toggle("is-hidden");
});

demoAudio?.addEventListener("click", () => {
  demoTrackMenu.hidden = !demoTrackMenu.hidden;
  demoAudio.classList.toggle("is-active", !demoTrackMenu.hidden);
});

demoFullscreen?.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  } else {
    demoPlayer?.requestFullscreen?.();
  }
});

document.querySelectorAll("[data-demo-start]").forEach((button) => {
  button.addEventListener("click", () => {
    window.setTimeout(() => {
      demoCurrentTime = 0;
      setDemoPlaying(true);
      renderDemoProgress();
    }, 350);
  });
});

document.querySelectorAll("details").forEach((details) => {
  details.addEventListener("toggle", () => {
    if (!details.open) return;
    document.querySelectorAll("details").forEach((other) => {
      if (other !== details) other.open = false;
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("senna-site-language") || "es");
  renderDemoProgress();
  window.lucide?.createIcons();
});
