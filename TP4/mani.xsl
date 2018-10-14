<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
                <meta charset="UTF-8"/>
                <title>Manifesto</title>
            </head>
            <body>
                <span class="w3-container w3-center">
                    <h1>Manifesto</h1>
                </span>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
 <!-- Parte da metainformação -->   
    <xsl:template match="meta">
        <button onclick="myFunction('OpenMeta')" class="w3-button w3-block w3-center w3-teal">
            <span style="font-size: 1.5em; color=Black;"> <i class="fas fa-info"/> </span> Informação
        </button>
        <span id="OpenMeta" class="w3-container w3-hide">
            <xsl:apply-templates/>
        </span>
        <script>
            function myFunction(id) {
                var x = document.getElementById(id);
                if (x.className.indexOf("w3-show") == -1) {
                     x.className += " w3-show";
                }else{ 
                    x.className = x.className.replace(" w3-show", "");
                }
            }
        </script>
        <br/>
    </xsl:template>
    
    <xsl:template match="id">
        <p>
            ID: <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="titulo">
        <p>
            Título: <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="subtitulo">
        <p>
            Subtítulo: <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="supervisor">
        <p>
            Supervisor:
            <a href="{website}">                     
                <xsl:value-of select="nome"/>   
            </a>
            
            <br/>
            
            <a href="mailto:{email}">
                Enviar correio
            </a>
        </p>
    </xsl:template>
    
    <xsl:template match="dinicio">
        <p>
            Data de ínicio: <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="dfim">
        <p>
            Data de fim: <xsl:value-of select="."/>
        </p>
    </xsl:template>
<!-- END of meta informação -->
<!-- Parte da equipa -->

    <xsl:template match="equipe">
        <button onclick="myFunction('OpenEq')" class="w3-button w3-block w3-center w3-teal">
            <span style="font-size: 1.5em; color=Black;"> <i class="fas fa-user-friends"/> </span> Equipe
        </button>
        <span id="OpenEq" class="w3-container w3-hide">
                <xsl:apply-templates/>
        </span>
        <br/>
    </xsl:template>
    
    <xsl:template match="elemento">
            <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="nome">
        <p>
            Nome: <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="id">
        <p>
            ID: <xsl:value-of select="."/>
        </p>
    </xsl:template>
    
    <xsl:template match="email">
        <p>
            Email: <a href="mailto:{.}"> <xsl:value-of select="."/> </a>
        </p>
    </xsl:template>
    
    <xsl:template match="website">
        <p>
            Website: <a href=""> None </a>
        </p>
    </xsl:template>
    
    <xsl:template match="foto">
            <p>
                <img src="{@path}" heigth="42" width="42"/>
            </p>
    </xsl:template>
<!-- END of equipe -->
<!-- Parte do resumo -->
    <xsl:template match="resumo">
        <button onclick="myFunction('OpenResu')" class="w3-button w3-block w3-center w3-teal">
            <span style="font-size: 1.5em; color=Black;"> <i class="fas fa-font"/> </span> Resumo
        </button>
        <span id="OpenResu" class="w3-container w3-hide">
            <xsl:apply-templates/>
        </span>
        <br/>
    </xsl:template>
    
    <xsl:template match="para">
        <p>
            <xsl:value-of select="."/>
        </p>
    </xsl:template>
<!-- END of resumo -->
<!-- Parte dos Resultados -->
    
    <xsl:template match="resultados">
        <button onclick="myFunction('OpenRes')" class="w3-button w3-block w3-center w3-teal">
            <span style="font-size: 1.5em; color=Black;"> <i class="far fa-file"/> </span> Resultados
        </button>
        <span id="OpenRes" class="w3-container w3-hide">
            <ul class="w3-ul w3-large">
                <xsl:apply-templates/>
            </ul>
        </span>
    </xsl:template>
    
    <xsl:template match="resultado">
        <li>
            <a href="{@path}"> <xsl:value-of select="."/> </a>
        </li>
    </xsl:template>
    
</xsl:stylesheet>