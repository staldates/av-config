<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns="http://qlcplus.sourceforge.net/Workspace" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:qlc="http://qlcplus.sourceforge.net/Workspace">

 <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()"/>
    </xsl:copy>
  </xsl:template>

<xsl:template match="qlc:FixtureVal">
<qlc:FixtureVal>
  <xsl:attribute name="ID">
    <xsl:value-of select="@ID" />
  </xsl:attribute>
  <xsl:attribute name="dmxChannel">
    <xsl:value-of select="(//qlc:Fixture[qlc:ID = current()/@ID]/qlc:Address) + 1" />
  </xsl:attribute>
  <xsl:attribute name="percentValue">
    <xsl:value-of select="round(substring(.,3) * 100 div 255)" />
  </xsl:attribute>
  <xsl:value-of select="." />
</qlc:FixtureVal>
</xsl:template>

</xsl:stylesheet>
