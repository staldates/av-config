<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

 <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()"/>
    </xsl:copy>
  </xsl:template>

<xsl:template match="FixtureVal">
<FixtureVal>
  <xsl:attribute name="ID">
    <xsl:value-of select="@ID" />
  </xsl:attribute>
  <xsl:attribute name="dmxChannel">
    <xsl:value-of select="(//Fixture[ID = current()/@ID]/Address) + 1" />
  </xsl:attribute>
  <xsl:attribute name="percentValue">
    <xsl:value-of select="round(substring(.,3) * 100 div 255)" />
  </xsl:attribute>
  <xsl:value-of select="." />
</FixtureVal>
</xsl:template>

</xsl:stylesheet>
