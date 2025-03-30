import { ResumeData } from '../types'
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

interface ResumePreviewProps {
  data: ResumeData
}

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skill: {
    padding: '4 8',
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
  }
})

// Create PDF Document component
const ResumePDF = ({ data }: ResumePreviewProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Personal Info */}
      <View style={styles.section}>
        <Text style={styles.header}>{data.personalInfo.fullName}</Text>
        <Text style={styles.text}>{data.personalInfo.email}</Text>
        <Text style={styles.text}>{data.personalInfo.phone}</Text>
        <Text style={styles.text}>{data.personalInfo.location}</Text>
        <Text style={styles.text}>{data.personalInfo.summary}</Text>
      </View>

      {/* Experience */}
      {data.experience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Experience</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={[styles.text, styles.bold]}>{exp.title}</Text>
              <Text style={styles.text}>{exp.company} • {exp.location}</Text>
              <Text style={styles.text}>{exp.startDate} - {exp.endDate}</Text>
              <Text style={styles.text}>{exp.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Projects</Text>
          {data.projects.map((project, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={[styles.text, styles.bold]}>{project.name}</Text>
              <Text style={styles.text}>{project.technologies.join(', ')}</Text>
              <Text style={styles.text}>{project.description}</Text>
              {project.link && <Text style={styles.text}>{project.link}</Text>}
            </View>
          ))}
        </View>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={[styles.text, styles.bold]}>{edu.school}</Text>
              <Text style={styles.text}>{edu.degree} in {edu.field}</Text>
              <Text style={styles.text}>{edu.startDate} - {edu.endDate}</Text>
              {(edu.percentage || edu.cgpa) && (
                <Text style={styles.text}>
                  {edu.percentage ? `Percentage: ${edu.percentage}` : `CGPA: ${edu.cgpa}`}
                </Text>
              )}
              <Text style={styles.text}>{edu.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <View style={styles.skills}>
            {data.skills.map((skill, index) => (
              <Text key={index} style={[styles.text, styles.skill]}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
      )}
    </Page>
  </Document>
)

export default function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
        {/* Personal Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName}</h1>
          <div className="text-gray-600 space-y-1">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            <p>{data.personalInfo.location}</p>
          </div>
          <p className="mt-4 text-gray-700">{data.personalInfo.summary}</p>
        </div>

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Experience</h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.location}</p>
                  <p className="text-gray-500">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
            <div className="space-y-6">
              {data.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.technologies.join(', ')}</p>
                  <p className="mt-2 text-gray-700">{project.description}</p>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 mt-1 inline-block"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree} in {edu.field}</p>
                  <p className="text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {(edu.percentage || edu.cgpa) && (
                    <p className="text-gray-600">
                      {edu.percentage ? `Percentage: ${edu.percentage}` : `CGPA: ${edu.cgpa}`}
                    </p>
                  )}
                  <p className="mt-2 text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PDF Download Button */}
      <div className="flex justify-end">
        <PDFDownloadLink
          document={<ResumePDF data={data} />}
          fileName={`${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          {({ loading }) =>
            loading ? 'Preparing PDF...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
} 